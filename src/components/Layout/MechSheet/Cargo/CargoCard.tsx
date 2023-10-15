import { Box, Grid, Typography } from "@mui/material";
import {
  background,
  bodytext,
  cargoprimary,
  carghighlight,
} from "../../../Variables/colors";
import React from "react";
import ActionPopover from "./ActionPopover";
import { listOfChassis } from "../../../Variables/listofchassis";
import { listOfModules } from "../../../Variables/listofmodules";
import { listOfSystems } from "../../../Variables/listofsystems";
import {
  listOfT1Scrap,
  listOfT2Scrap,
  listOfT3Scrap,
  listOfT4Scrap,
  listOfT5Scrap,
  listOfT6Scrap,
} from "../../../Variables/listofscrap";
import {
  selectActiveCrawler,
  selectActiveMech,
} from "../../../../redux/ActiveSelectionsSlice";
import { useAppSelector, useAppDispatch } from "../../../../redux/Hooks";
import { saveMechCargo } from "../../../../redux/UnionSlice";
import { getMech } from "../../../Pages/MechPage";
interface cargoInfo {
  info: string;
  id: number;
}

export default function CargoCard({ info, id }: cargoInfo) {
  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);
  const mech = getMech();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  let item = parseInfo(info);
  var slotsTaken = 1;
  var gridWidthvar = 3;

  if (item.size == 1) {
    slotsTaken = 1;
    gridWidthvar = 3; //4 spaces on row
  } else if (item.size == 2) {
    slotsTaken = 2;
    gridWidthvar = 6; //3 spaces on row
  }

  const open = Boolean(anchorEl);
  return (
    <>
      <Grid item xs={gridWidthvar}>
        <Box
          onClick={handlePopoverOpen}
          height="50px"
          sx={{
            backgroundColor: info == "Empty" ? "grey" : cargoprimary,
            borderWidth: 1,
            borderStyle: item.size > 1 ? null : "dashed",
            borderColor: "black",
            "&:hover": {
              background: carghighlight,
              cursor: "pointer",
            },
          }}
        >
          <Typography fontSize={20} color={bodytext}>
            {item.name}
          </Typography>
        </Box>
        <ActionPopover
          open={open}
          handlePopoverClose={handlePopoverClose}
          anchorEl={anchorEl}
          remove={() => {
            let updatedArray = mech.cargo.filter(function (
              idToRemove, //Needed for Parameter
              index
            ) {
              return id !== index;
            });

            console.log(mech.cargo, item, updatedArray);

            let cargoSaveObject = {
              crawlerID: crawlerID,
              mechID: mechID,
              equipment: updatedArray,
            };
            dispatch(saveMechCargo(cargoSaveObject));
          }}
        />
      </Grid>
    </>
  );
}

//This still needs to be expanded
function parseInfo(info: string) {
  let obj = { type: "", tier: "", id: 0, size: 0, name: "" };
  let tempArray = info.split("-");

  obj.type = tempArray[0];
  obj.tier = tempArray[1];
  obj.id = Number(tempArray[2]);

  var equipmentlist = null;
  if (obj.type == "Module") {
    equipmentlist = listOfModules;
    obj.size = Number(obj.tier[1]);

    var tierIDX = equipmentlist.findIndex(
      (i) => i.qualities.techLevel === Number(obj.tier[1])
    );

    obj.name = equipmentlist[tierIDX + obj.id].name;
  } else if (obj.type == "System") {
    equipmentlist = listOfSystems;
    obj.size = Number(obj.tier[1]);
    obj.name = equipmentlist[obj.id].name;
  } else if (obj.type == "Chassis") {
    equipmentlist = listOfChassis;
    obj.size = Number(obj.tier[1]);
    obj.name = equipmentlist[obj.id].chassis;
  } else {
    obj.size = 1;
    if (obj.tier == "T2") {
      equipmentlist = listOfT2Scrap;
    } else if (obj.tier == "T3") {
      equipmentlist = listOfT3Scrap;
    } else if (obj.tier == "T4") {
      equipmentlist = listOfT4Scrap;
    } else if (obj.tier == "T5") {
      equipmentlist = listOfT5Scrap;
    } else if (obj.tier == "T6") {
      equipmentlist = listOfT6Scrap;
    } else {
      equipmentlist = listOfT1Scrap;
    }
    obj.name = equipmentlist[obj.id].name;
  }
  // console.log(obj);

  return obj;
}

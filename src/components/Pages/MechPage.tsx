import React, { useState } from "react";
import MechSheet from "../Sheets/MechSheet";
import {
  FormControlLabel,
  Switch,
  Collapse,
  Box,
  Paper,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ChassisSelect from "../Layout/MechSheet/ChassisSelect";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { selectDatabase } from "../../redux/UnionSlice";
import { useSelector } from "react-redux";
import { chassisselectimgborder } from "../Variables/colors";
import { listofchassis } from "../Variables/listofchassis";
import Image from "mui-image";
import {
  saveActiveMech,
  selectActiveCrawler,
  selectActiveMech,
} from "../../redux/ActiveSelectionsSlice";

interface mechCardProps {
  mechBayID: number;
  name: string;
  imgUrl: string;
  onSelected: () => void;
}

interface mechBayProps {
  onSelected: () => void;
}

function MechStat(text: string) {
  return (
    <Box
      sx={{
        borderWidth: "1px 1px",
        borderStyle: "solid",
        borderColor: chassisselectimgborder,
        pl: "3px",
      }}
    >
      <Typography variant="subtitle2" component="h2">
        {text}
      </Typography>
    </Box>
  );
}

function MechCard(props: mechCardProps) {
  const dispatch = useAppDispatch();
  return (
    <Box
      onClick={() => {
        dispatch(saveActiveMech(props.mechBayID));
        props.onSelected();
        console.log("Select mech bay Id", props.mechBayID);
      }}
      sx={{
        borderWidth: "2px 2px",
        borderStyle: "solid",
        borderColor: chassisselectimgborder,
        p: "4px",
      }}
    >
      <Stack width="100%" spacing={0} sx={{ ml: "auto", mr: "auto" }}>
        <Box
          sx={{
            display: "flex",
            borderWidth: "2px 2px",
            borderStyle: "solid",
            borderColor: chassisselectimgborder,
          }}
        >
          <Image src={props.imgUrl} showLoading duration={0} />
        </Box>
        {MechStat(props.name)}
        {/*<Grid
          mt="1px"
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
           <Grid item xs={4} key={item.chassis + "-stats-sp"}>
            {createText("SP: ", item.id, item.structurepoints)}
          </Grid>
          <Grid item xs={4} key={item.chassis + "-stats-ep"}>
            {createText("EP: ", item.id, item.energypoints)}
          </Grid>
          <Grid item xs={4} key={item.chassis + "-stats-hc"}>
            {createText("HC: ", item.id, item.heatcap)}
          </Grid>

           <Grid item xs={4} key={item.chassis + "-stats-ss"}>
            {createText("System Slots: ", item.id, item.systemslots)}
          </Grid>
          <Grid item xs={4} key={item.chassis + "-stats-ms"}>
            {createText("Module Slots: ", item.id, item.moduleslots)}
          </Grid>
          <Grid item xs={4} key={item.chassis + "-stats-cc"}>
            {createText("Cargo Cap: ", item.id, item.cargocap)}
          </Grid>

          <Grid item xs={4} key={item.chassis + "-stats-tl"}>
            {createText("Tech Level: ", item.id, item.techlevel)}
          </Grid>
          <Grid item xs={4} key={item.chassis + "-stats-sv"}>
            {createText("Scrap Value: ", item.id, item.salvagevalue)}
          </Grid> 
        </Grid>*/}
      </Stack>
    </Box>
  );
}

// Show the already built mechs
function MechBay({ onSelected }: mechBayProps) {
  const crawlerID = useAppSelector(selectActiveCrawler);
  const unionDatabase = useAppSelector(selectDatabase);

  if (crawlerID == undefined) {
    return;
  }
  //Else display the mech Bay

  const availableMechs = unionDatabase.crawlers[crawlerID].mechBay.map(
    (item, index) => {
      let displayedItem = {
        mechBayID: index,
        name: item.name,
        imgUrl: item.imgUrl,
        onSelected: onSelected,
      };

      return (
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          key={index + displayedItem.name + "-grid-item"}
        >
          <MechCard
            {...displayedItem}
            key={index + displayedItem.name + "-card"}
          />
        </Grid>
      );
    }
  );

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      // sx={{ overflowY: "scroll" }}
      // height="90%"
      mt="20px"
    >
      {availableMechs}
    </Grid>
  );
}

//Display Mechs Page
function DisplayMechs() {
  const [openChassisSelect, setChassisSelectOpen] = useState(false);
  const handleChassisSelectOpen = () => setChassisSelectOpen(true);
  const handleChassisSelectClose = () => setChassisSelectOpen(false);

  const [selectionFinalised, setChecked] = React.useState(false);
  const handleMechSelected = () => setChecked(true);

  return (
    <>
      {!selectionFinalised && (
        <>
          <Box onClick={handleChassisSelectOpen} sx={buttonStyle}>
            Create Mech
          </Box>
          <MechBay onSelected={handleMechSelected} />
          <ChassisSelect
            open={openChassisSelect}
            onClose={handleChassisSelectClose}
            onSelected={handleMechSelected}
          />
        </>
      )}

      {selectionFinalised && (
        <Collapse in={selectionFinalised}>
          <MechSheet />
        </Collapse>
      )}
    </>
  );
}

export default function MechPage() {
  return (
    <>
      <DisplayMechs />
    </>
  );
}

export function getMech() {
  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);
  const unionDatabase = useAppSelector(selectDatabase);

  if (crawlerID == undefined || mechID == undefined) {
    throw new Error("No ID");
  }
  //Else display the mech Bay
  // console.log(
  //   crawlerID,
  //   mechID,
  //   // unionDatabase.crawlers[crawlerID],
  //   unionDatabase.crawlers[crawlerID].mechBay[mechID].modules
  // );
  return unionDatabase.crawlers[crawlerID].mechBay[mechID];
}

const buttonStyle = {
  p: 4,
  height: "50px",
  width: "50px",
  backgroundColor: "rgba(0, 0, 0, 0.8)",

  border: "2px solid #000",
  boxShadow: 24,
};

import { useState } from "react";

import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Grid } from "@mui/material";
import EquipmentCard from "./EquipmentCard";
import HoloTag from "../../../Entity/HoloTag";
import { listOfModules } from "../../../Variables/listofmodules";
import { listOfSystems } from "../../../Variables/listofsystems";

import AddEquipmentButton from "./AddEquipmentButton";
import EquipmentSelection from "./EquipmentSelection";
import { getUsedPoints } from "../../../Layout/MechSheet/Equipment/EquipmentSelection";

import { useAppDispatch, useAppSelector } from "../../../../redux/Hooks";
import { saveMechSystems, saveMechModules } from "../../../../redux/UnionSlice";
import { getMech } from "../../../Pages/MechPage";
import {
  selectActiveCrawler,
  selectActiveMech,
} from "../../../../redux/ActiveSelectionsSlice";

interface equipmentProps {
  equipmentType: string;
}
function EquipmentCards({ equipmentType }: equipmentProps) {
  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);
  const mech = getMech();
  const dispatch = useAppDispatch();

  const equipment = equipmentType == "Modules" ? mech.modules : mech.systems;
  let list = equipmentType == "Modules" ? listOfModules : listOfSystems;

  let equipmentToRender = [];
  if (equipment) {
    for (let i = 0; i < equipment.length; i++) {
      for (let modIdx = 0; modIdx < list.length; modIdx++) {
        if (list[modIdx].id == equipment[i]) {
          equipmentToRender.push(
            <EquipmentCard
              key={i + "-" + list[modIdx].name}
              id={modIdx}
              equipmentType={equipmentType}
              onCloseClick={() => {
                let updatedArray = equipment.filter(function (
                  idToRemove, //Needed for Parameter
                  index
                ) {
                  return i !== index;
                });

                let newMech = {
                  crawlerID: crawlerID,
                  mechID: mechID,
                  equipment: updatedArray,
                };

                if (equipmentType == "Modules") {
                  dispatch(saveMechModules(newMech));
                } else {
                  dispatch(saveMechSystems(newMech));
                }
              }}
            ></EquipmentCard>
          );
        }
      }
    }
  }

  return equipmentToRender;
}

export default function LoadoutSection({ equipmentType }: equipmentProps) {
  const [open, setOpen] = useState(false);
  const openEquipmentSelect = () => setOpen(true);
  const closeEquipmentSelect = () => setOpen(false);

  const mech = getMech();
  let equippedList = equipmentType == "Modules" ? mech.modules : mech.systems;

  let slotCap =
    equipmentType == "Modules"
      ? mech.stats.moduleslots
      : mech.stats.systemslots;

  let usedSlots = getUsedPoints(equippedList, equipmentType);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "80%",
        mb: "1em",
      }}
    >
      <HoloTag
        title={equipmentType}
        extraTag={usedSlots + "/" + slotCap}
        padding="15px 15px 15px 15px"
      >
        <Grid container spacing={2}>
          <EquipmentCards equipmentType={equipmentType} />

          <Grid item xs={4}>
            <AddEquipmentButton onClick={openEquipmentSelect} />
          </Grid>
        </Grid>
      </HoloTag>

      {/* //Purchase/Swap Equipped Modules Modal */}
      <EquipmentSelection
        open={open}
        onClose={closeEquipmentSelect}
        equipmentType={equipmentType}
      ></EquipmentSelection>
    </Container>
  );
}

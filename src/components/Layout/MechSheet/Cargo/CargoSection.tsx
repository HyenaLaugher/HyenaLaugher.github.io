import { useState } from "react";

import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Button, Grid, Typography } from "@mui/material";
// import EquipmentCard from "./EquipmentCard";
import HoloTag from "../../../Entity/HoloTag";

// import AddEquipmentButton from "./AddEquipmentButton";
// import EquipmentSelection from "./EquipmentSelection";
import { getUsedPoints } from "../../../Layout/MechSheet/Equipment/EquipmentSelection";

import { useAppDispatch } from "../../../../redux/Hooks";
import { saveMechSystems, saveMechModules } from "../../../../redux/UnionSlice";
import { getMech } from "../../../Pages/MechPage";
import { background, loadoutboxbodytext } from "../../../Variables/colors";
import { listOfT1Scrap } from "../../../Variables/listofscrap";
import CargoCard from "./CargoCard";
import EmptyCargoCard from "./EmptyCargoCard";
import BlockedCargoCard from "./BlockedCargoCard";
import React from "react";
import ActionPopover from "./ActionPopover";
import AddScrapPopover from "./AddScrapPopover";

function CreateCargoGridItems() {
  // const cargo = [
  //   "Module-T2-0",
  //   "System-T1-3",
  //   "Scrap-T1-0",
  //   "Scrap-T1-2",
  //   "Scrap-T1-2",
  // ];

  const mech = getMech();

  //Create and fill the cargo Space with Cargo from an array.
  let cargoToRender = [];
  for (let i = 0; i < mech.stats.cargocap; i++) {
    if (mech.cargo[i]) {
      console.log("Push A Filled Space");

      cargoToRender.push(
        <CargoCard
          info={mech.cargo[i]}
          id={i}
          key={"Cargo-Card-" + cargoToRender.length}
        />
      );
    } else {
      cargoToRender.push(
        <Grid item xs={3} key={"Empty-Cargo-Card-" + cargoToRender.length}>
          <EmptyCargoCard />
        </Grid>
      );
    }
  }

  //Fill the rest of the row with blocked cargo slots
  let size = 0;
  for (let i = 0; i < mech.cargo.length; i++) {
    let temp = mech.cargo[i].split("-");
    if (temp[0] == "Scrap") {
      size += 1;
    } else {
      size += Number(temp[1][1]);
    }
  }

  const rem = mech.stats.cargocap % 4;

  console.log("size", size, "  Rem", rem);

  const blockedSpaces = rem; //> 0 ? 4 - rem : 0;
  if (blockedSpaces > 0) {
    for (let i = 0; i < blockedSpaces; i++) {
      cargoToRender.push(
        <Grid item xs={3} key={"Cargo-Card-" + cargoToRender.length}>
          <BlockedCargoCard />
        </Grid>
      );
    }
  }

  return cargoToRender;
}

function CargoGrid() {
  return (
    <>
      <Box display="flex" m="5px">
        <Grid container spacing={2}>
          {CreateCargoGridItems()}
        </Grid>
      </Box>
    </>
  );
}

export default function CargoSection() {
  //   const [open, setOpen] = useState(false);
  //   const openEquipmentSelect = () => setOpen(true);
  //   const closeEquipmentSelect = () => setOpen(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const mech = getMech();

  let slotCap = mech.stats.cargocap;
  let usedSlots = mech.cargo.length;

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
        title="Cargo"
        extraTag={usedSlots + "/" + slotCap}
        padding="15px 15px 15px 15px"
      >
        <Box display="flex">
          <Button variant="contained">Add Cargo</Button>
          <Button variant="contained" onClick={handlePopoverOpen}>
            Add Randomised Scrap
          </Button>
        </Box>

        <CargoGrid />
      </HoloTag>

      {/* <EquipmentSelection
        open={open}
        onClose={closeEquipmentSelect}
        equipmentType={equipmentType}
      ></EquipmentSelection> */}

      <AddScrapPopover
        open={open}
        handlePopoverClose={handlePopoverClose}
        anchorEl={anchorEl}
      />
    </Container>
  );
}

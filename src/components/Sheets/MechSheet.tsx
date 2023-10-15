import { Box, Stack } from "@mui/material";
import MechImage from "../Layout/MechSheet/MechImage";
import Stats from "../Layout/MechSheet/Stats/Stats";
import Loadout from "../Layout/MechSheet/Equipment/LoadoutSection";

import TitleCard from "../Layout/MechSheet/TitleCard";
import CargoSection from "../Layout/MechSheet/Cargo/CargoSection";

export default function MechSheet() {
  //Handles displaying all the data
  //Displays Data in Sections for ease of use
  return (
    <>
      <Box sx={{ height: "0.67em" }} />
      <TitleCard />
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100vm",
          marginBottom: "10px",
        }}
      >
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={0}
        >
          <Stats />
          <MechImage />
        </Stack>
      </Box>
      <Box sx={{ height: "1em" }} />
      <Loadout equipmentType="Modules"></Loadout>
      <Box sx={{ height: "0.67em" }} />
      <Loadout equipmentType="Systems"></Loadout>
      <CargoSection />
      <Box height="100px" />
    </>
  );
}

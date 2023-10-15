import { Container, Stack } from "@mui/material";
import StatGroup from "./StatGroup";
import HoloTag from "../../../Entity/HoloTag";

import { useAppSelector } from "../../../../redux/Hooks";
import { selectMech } from "../../../../redux/MechSlice";
import { getMech } from "../../../Pages/MechPage";

export default function Stats() {
  const targetsToRender = [];
  let statStructure = createStatStructure();
  for (let i = 0; i < statStructure.length; i++) {
    // Then the code pushes each time it loops to the empty array I initiated.
    let stats = statStructure[i];
    targetsToRender.push(
      <StatGroup statsArr={stats} groupName={getGroupName(i)} key={i} />
    );
  }

  return (
    // <Container
    //   disableGutters
    //   sx={{
    //     m: "0px 10px 0px 10px",
    //     p: "0px",
    //     width: "50%",
    //   }}
    // >
    //   <HoloTag title="Stats" padding="0px 15px 0px 0px">
    //     <Stack>{targetsToRender}</Stack>
    //   </HoloTag>
    // </Container>

    <Container
      disableGutters
      sx={{
        m: "0px 0px 0px 0px",
        p: "40px 0px 0px 0px",
        width: "50%",
      }}
    >
      <Stack spacing={3}>{targetsToRender}</Stack>
    </Container>
  );
}

function getGroupName(row: number) {
  let groupName = "Primary Stats";
  if (row == 1) {
    groupName = "Loadout Stats";
  } else if (row == 2) {
    groupName = "Values";
  }
  return groupName;
}

function createStatStructure() {
  // const mech = useAppSelector(selectMech);
  const mech = getMech();
  return [
    [
      {
        id: 0,
        name: "Structure Points [SP]:",
        value: mech.stats.structurepoints,
        cap: mech.stats.structurepoints,
        // onDataChange: onSPChange,
      },
      {
        id: 1,
        name: "Energy Points [EP]:",
        value: mech.stats.energypoints,
        cap: mech.stats.energypoints,
        // onDataChange: onEPChange,
      },
      {
        id: 2,
        name: "Heat Cap [HC]:",
        value: mech.stats.heatcap,
        cap: mech.stats.heatcap,
        // onDataChange: onHeatCapChange,
      },
    ],
    [
      {
        id: 3,
        name: "System Slots:",
        value: mech.stats.systemslots,
        // onDataChange: onSystemSlotsChange,
      },
      {
        id: 4,
        name: "Module Slots:",
        value: mech.stats.moduleslots,
        // onDataChange: onModuleSlotsChange,
      },
      {
        id: 5,
        name: "Cargo Cap:",
        value: mech.stats.cargocap,
        // onDataChange: onCargoCapChange,
      },
    ],
    [
      {
        id: 6,
        name: "Tech Level:",
        value: mech.stats.techlevel,
        // onDataChange: onTechLevelChange,
      },
      {
        id: 7,
        name: "Salvage Value:",
        value: mech.stats.salvagevalue,
        // onDataChange: onSalvageValueChange,
      },
    ],
  ];
}

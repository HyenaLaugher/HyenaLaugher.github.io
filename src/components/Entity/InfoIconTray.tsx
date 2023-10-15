// import TierIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CostIcon from "@mui/icons-material/ChangeHistory";
import ScrapIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import {
  slotcost,
  techlevel,
  scrapvalue,
  loadoutboxprimary,
} from "../Variables/colors";
import { Stack } from "@mui/material";

//To be replaced by custom Icons
import Tier1Icon from "@mui/icons-material/LooksOne";
import Tier2Icon from "@mui/icons-material/LooksTwo";
import Tier3Icon from "@mui/icons-material/Looks3";
import Tier4Icon from "@mui/icons-material/Looks4";
import Tier5Icon from "@mui/icons-material/Looks5";
import Tier6Icon from "@mui/icons-material/Looks6";

import CustomIcon from "../Entity/CustomIcon";

interface IconProps {
  techLevel: number;
  slotValue: number;
  salvageValue: number;
}

interface TechIconProps {
  techLevel: number;
}

function TechLevelIcon({ techLevel }: TechIconProps) {
  let JSX = <Tier1Icon sx={{ color: techlevel }} />;
  if (techLevel == 2) {
    JSX = <Tier2Icon sx={{ color: techlevel }} />;
  } else if (techLevel == 3) {
    JSX = <Tier3Icon sx={{ color: techlevel }} />;
  } else if (techLevel == 4) {
    JSX = <Tier4Icon sx={{ color: techlevel }} />;
  } else if (techLevel == 5) {
    JSX = <Tier5Icon sx={{ color: techlevel }} />;
  } else if (techLevel == 6) {
    JSX = <Tier6Icon sx={{ color: techlevel }} />;
  }
  return JSX;
}

export default function InfoIconTray({
  techLevel,
  slotValue,
  salvageValue,
}: IconProps) {
  return (
    <Box
      width="fit-content"
      height="fit-content"
      sx={{
        // display: "flex",
        // alignItems: "center",
        backgroundColor: loadoutboxprimary,
        // paddingRight: "10px",
      }}
    >
      <Stack>
        {/* <CustomIcon /> */}
        <TechLevelIcon techLevel={techLevel} />
        {/* <TierIcon sx={{ color: techlevel }} /> */}
        <CostIcon sx={{ color: slotcost }} />
        <ScrapIcon sx={{ color: scrapvalue }} />
      </Stack>
    </Box>
  );
}

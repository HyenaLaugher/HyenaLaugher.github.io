import { Typography, Box, createTheme, ThemeProvider } from "@mui/material";

import {
  loadoutboxprimary,
  loadoutboxsecondary,
  loadoutboxheadertext,
} from "../../../Variables/colors";
import { teal, cyan, red } from "@mui/material/colors";
import Tier1Icon from "@mui/icons-material/LooksOne";
import Tier2Icon from "@mui/icons-material/LooksTwo";
import Tier3Icon from "@mui/icons-material/Looks3";
import Tier4Icon from "@mui/icons-material/Looks4";
import Tier5Icon from "@mui/icons-material/Looks5";
import Tier6Icon from "@mui/icons-material/Looks6";
import { techlevel } from "../../../Variables/colors";

interface nameProps {
  name: string;
  techLevel: number;
  onClick: () => void;
  valid: boolean;
}

interface iconProps {
  techLevel: number;
}

function TechLevelIcon({ techLevel }: iconProps) {
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

export default function EquipmentName({
  name,
  techLevel,
  onClick,
  valid,
}: nameProps) {
  let theme = valid ? validTheme : invalidTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems="center"
        paddingLeft="5px"
        width="90%"
        onClick={onClick}
        sx={{
          "&:hover": {
            background: loadoutboxsecondary,
            cursor: "pointer",
          },
          backgroundColor: "primary.main",
        }}
      >
        <TechLevelIcon techLevel={techLevel} />
        <Typography
          variant="h6"
          color="text.primary"
          marginLeft="1em"
          marginRight="auto"
        >
          {name}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

const validTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: loadoutboxprimary,
      // dark: red[900],
      // light: loadoutboxsecondary,
    },
    secondary: { main: loadoutboxsecondary },

    text: {
      primary: loadoutboxheadertext,
      //   secondary: "rgba(132, 146, 166, 1)",
      //   disabled: "rgba(60, 72, 88, 0.38)",
    },
  },
});

const invalidTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: teal[500], dark: teal[900] },
    secondary: { main: cyan[500] },

    text: {
      primary: "rgba(129,45,45,0.87)",
      secondary: "rgba(132, 146, 166, 1)",
      disabled: "rgba(60, 72, 88, 0.38)",
    },
  },
});

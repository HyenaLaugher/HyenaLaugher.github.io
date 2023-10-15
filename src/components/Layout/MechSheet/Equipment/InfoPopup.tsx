import {
  Box,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { cyan, orange, teal } from "@mui/material/colors";
import { listOfModules } from "../../../Variables/listofmodules";
import KeywordsGrid from "../Equipment/Keyword";
interface props {
  open: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  // equipmentType: string;
  id: number;
  name: string;
  qualities: {
    techLevel: number;
    slotValue: number;
    salvageValue: number;

    turn?: string;
    range?: string;
    recommended?: boolean;
    hacking?: string;
  };
  fulldescription: string;
  diceRoll?: { roll: number; result: string }[];
}

interface rollTableprops {
  diceRoll?: { roll: number; result: string }[];
}

function RollTable(props: rollTableprops) {
  if (!props.diceRoll) {
    return <></>;
  }

  return (
    <>
      <Box p="5px" paddingBottom="15px">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "40%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Roll</TableCell>
                <TableCell align="center">Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.diceRoll.map((row) => (
                <TableRow
                  key={row.roll}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.roll}
                  </TableCell>
                  <TableCell align="center">{row.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default function InfoPopup({
  open,
  onClose,
  id,
  qualities,
  name,
  fulldescription,
  diceRoll,
}: props) {
  return (
    <ThemeProvider theme={loadoutTheme}>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {fulldescription}
          </Typography>
          <RollTable diceRoll={diceRoll} />
          <KeywordsGrid name={name} qualities={qualities} />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const loadoutTheme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    mode: "dark",

    primary: { main: teal[500], dark: teal[900] },
    secondary: { main: cyan[500] },

    text: {
      primary: "rgba(129,45,45,0.87)",
      secondary: "rgba(132, 146, 166, 1)",
      disabled: "rgba(60, 72, 88, 0.38)",
    },
  },
});
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

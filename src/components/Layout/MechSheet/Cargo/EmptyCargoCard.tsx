import { Box, IconButton, Typography } from "@mui/material";
import { background, loadoutboxbodytext } from "../../../Variables/colors";
import AddIcon from "@mui/icons-material/Add";

export default function EmptyCargoCard() {
  return (
    <Box
      height="50px"
      sx={{
        borderWidth: 0.1,
        borderStyle: "dashed",
        borderColor: "black",
      }}
    >
      <Typography> Empty </Typography>
      {/* <IconButton
        size="medium"
        sx={{ color: { background }, borderRadius: 2 }}
        //   onClick={onClick}
      >
        <AddIcon fontSize="large" style={{ color: loadoutboxbodytext }} />
      </IconButton> */}
    </Box>
  );
}

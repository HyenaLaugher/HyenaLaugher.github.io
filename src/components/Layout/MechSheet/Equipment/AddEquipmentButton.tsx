import { Box, IconButton } from "@mui/material";
import { background, loadoutboxbodytext } from "../../../Variables/colors";
import AddIcon from "@mui/icons-material/Add";

interface props {
  onClick: () => void;
}

export default function AddEquipmentButton({ onClick }: props) {
  return (
    <Box //Background
      margin="4px 0px 0px 0px"
      padding="0px 0px 0px 0px"
      width="fit-content"
    >
      <IconButton
        size="medium"
        sx={{ color: { background }, borderRadius: 2 }}
        onClick={onClick}
      >
        <AddIcon fontSize="large" style={{ color: loadoutboxbodytext }} />
      </IconButton>
    </Box>
  );
}

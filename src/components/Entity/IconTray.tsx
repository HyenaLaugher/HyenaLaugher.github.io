import { Box, IconButton } from "@mui/material";
import {
  swapicon,
  closeicon,
  background,
  loadoutboxbodytext,
} from "../Variables/colors";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import CloseIcon from "@mui/icons-material/Close";

interface IconProps {
  // onSwapClick: (e: any) => void;
  onCloseClick: (e: any) => void;
}

export default function IconTray({ onCloseClick }: IconProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // backgroundColor: "primary.main",
        paddingRight: "10px",
      }}
    >
      <SwapCallsIcon sx={{ color: swapicon }} />
      <CloseIcon onClick={onCloseClick} sx={{ color: closeicon }} />
    </Box>
  );
}

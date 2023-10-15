import { Box, Popover } from "@mui/material";
import React from "react";
import {
  swapicon,
  closeicon,
  background,
  loadoutboxprimary,
} from "../../../Variables/colors";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import CloseIcon from "@mui/icons-material/Close";
interface popoverProps {
  open: boolean;
  handlePopoverClose: () => void;
  anchorEl: HTMLElement | null;
  remove: () => void;
}

export default function ActionPopover({
  open,
  handlePopoverClose,
  anchorEl,
  remove,
}: popoverProps) {
  return (
    <Popover
      open={open}
      onClose={handlePopoverClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: loadoutboxprimary,
          paddingRight: "10px",
        }}
      >
        The content of the Popover.
        <SwapCallsIcon sx={{ color: swapicon }} />
        <CloseIcon onClick={remove} sx={{ color: closeicon }} />
      </Box>
    </Popover>
  );
}

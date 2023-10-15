import { TextField, Typography } from "@mui/material";
import { stattext } from "../../../Variables/colors";
import React from "react";
import updateStats from "../../../../App";

interface props {
  value?: number | null;
  cap?: number | null;
  ml?: string;
  mr?: string;
  onDataChange?: (e: any) => void;
}

export default function Heading({ value, cap, ml, mr, onDataChange }: props) {
  return (
    <>
      <TextField
        margin="dense"
        value={value}
        onChange={onDataChange}
        variant="standard"
        size="small"
        inputProps={{
          maxLength: 2,
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: { textAlign: "center", fontSize: 20, width: "30px" },
        }}
        sx={{
          color: { stattext },
          marginLeft: ml,
        }}
      />
      <Typography
        padding="0"
        margin="0"
        border="0"
        vertical-align="top"
        mt="8px"
        mb="4px"
        color={stattext}
        sx={{ textAlign: "center", fontSize: 20, width: "30px" }}
      >
        /
      </Typography>
      <TextField
        margin="dense"
        defaultValue={cap}
        variant="standard"
        size="small"
        inputProps={{
          maxLength: 2,
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: { textAlign: "center", fontSize: 20, width: "30px" },
        }}
        sx={{
          color: { stattext },
          marginRight: mr,
        }}
      />
    </>
  );
}

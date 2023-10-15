import { Box, Typography, TextField, Grid } from "@mui/material";
import React from "react";
import {
  statboxprimary,
  statboxsecondary,
  statboxborder,
  stattext,
} from "../../../Variables/colors";
import StatFractionField from "./StatFractionField";
import StatIntegerField from "./StatIntegerField";

interface props {
  id: number;
  name: string;
  value: number | null;
  cap?: number;
  onDataChange?: (e: any) => void;
}

interface valueFieldProps {
  value: number | null;
  cap?: number;
  onDataChange?: (e: any) => void;
}

function ValueField({ value, cap, onDataChange }: valueFieldProps) {
  if (!cap) {
    return (
      <StatIntegerField
        value={value}
        ml="5px"
        mr="0px"
        onDataChange={onDataChange}
      />
    );
  } else {
    return (
      <StatFractionField
        value={value}
        cap={cap}
        ml="5px"
        mr="0px"
        onDataChange={onDataChange}
      />
    );
  }
}

export default function StatField(
  this: any,
  { name, value, cap, onDataChange }: props
) {
  return (
    <Grid item xs={4}>
      <Box //Component Border
        display="flex"
        margin="15px"
        p="1px"
        minHeight="50px"
        sx={{
          clipPath: "polygon(100% 0, 100% 75%, 90% 100%, 0 100%, 0 0)",
        }}
      >
        <Box //Component Container
          display="flex"
          width="100%"
          sx={{
            backgroundColor: statboxprimary,
            clipPath: "polygon(100% 0, 100% 75%, 90% 100%, 0 100%, 0 0)",
          }}
        >
          <Box //Stat Name
            display="flex"
            marginLeft="0px"
            marginRight="auto"
            width="70%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="body1"
              marginLeft="3px"
              marginRight="3px"
              color={stattext}
            >
              {name}
            </Typography>
          </Box>
          <Box //Background box (Visible)
            display="flex"
            // paddingLeft="3%"
            paddingRight="12%"
            width="30%"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: statboxsecondary,
              clipPath: "polygon(100% 0, 100% 75%, 90% 100%, 0 100%, 0 0)",
            }}
          >
            <ValueField value={value} cap={cap} onDataChange={onDataChange} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

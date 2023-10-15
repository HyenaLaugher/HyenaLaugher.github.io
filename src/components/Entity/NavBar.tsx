import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface btnProps {
  text: string;
}

function PageButton({ text }: btnProps) {
  return (
    <>
      <Box
        p="2px"
        width="120px"
        sx={{
          "&:hover": {
            background: "green",
          },
          backgroundColor: "blue",
          borderWidth: "1px 1px",
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Typography fontSize={20}>{text}</Typography>
      </Box>
    </>
  );
}

function PageButtonGroup() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <PageButton text={"Crawler Bay"} />
        <PageButton text={"Pilot Bay"} />
        <PageButton text={"Mech Bay"} />
      </Stack>
    </>
  );
}

function ActiveButton({ text }: btnProps) {
  return (
    <>
      <Box
        p="2px"
        width="60px"
        sx={{
          "&:hover": {
            background: "green",
          },
          backgroundColor: "blue",
          borderWidth: "1px 1px",
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <CloseIcon />
      </Box>
    </>
  );
}

function ActiveButtonGroup() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <ActiveButton text={"Crawler"} />
        <ActiveButton text={"Pilot"} />
        <ActiveButton text={"Mech"} />
      </Stack>
    </>
  );
}

function NavBar() {
  return (
    <>
      <Box
        position="fixed"
        bottom="50px"
        left="0px"
        p="5px"
        sx={{
          backgroundColor: "grey",
        }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <PageButtonGroup />
          <ActiveButtonGroup />
        </Stack>
      </Box>
    </>
  );
}

export default NavBar;

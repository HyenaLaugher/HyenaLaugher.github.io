import { useState } from "react";
// import * as React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "../App.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// import { styled } from "@mui/material/styles";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import * as React from "react";
// import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/AddBox";
import RemoveIcon from "@mui/icons-material/IndeterminateCheckBox";

import TierIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CostIcon from "@mui/icons-material/ChangeHistory";
import ScrapIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";

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

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    mode: "dark",
  },
});

// interface sysObj {
//   id: number;
//   name: string;
//   qualities: string;
//   description: string;
// }

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

function AccordionHandler() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const myArray = [
    {
      id: 1,
      name: "Chainsaw Arm",
      qualities: "Range: Close // Damage: 2 SP // Melee // Salvaging",
      description:
        "Originally developed as a tool for lumberjack Mechs by Hodgson & Vasquez, an Evantis subsidiary, this saw arm has remained in use for its salvaging capabilities, utility, and stopping power even as  forests have been cut down across the world.",
    },
    {
      id: 2,
      name: "Escape Hatch",
      qualities: "Range: Close // Damage: 2 SP // Melee // Salvaging",
      description: "Some text",
    },
    {
      id: 3,
      name: "Locomotion System",
      qualities: "Range: Close // Damage: 2 SP // Melee // Salvaging",
      description: "Some text",
    },
  ];

  const myAccordion = myArray.map((item) => {
    return (
      <Accordion
        key={item.name}
        expanded={expanded === "panel" + item.id}
        onChange={handleChange("panel" + item.id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + item.id + "1bh-content"}
          id={"panel" + item.id + "1bh-header"}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ flexShrink: 0 }}>{item.name}</Typography>
          </Box>
          <Box>
            <TierIcon />
            <CostIcon />
            <ScrapIcon />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography display="block">
            {item.qualities} <br /> {item.description}
          </Typography>
          <Box sx={{ justifyContent: "flex-end" }}>
            <RemoveIcon />
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <StyledDiv></StyledDiv> */}
      <Container
        sx={{
          // width: "40%",
          // position: "relative",
          // outline: "00px",
          margin: "auto",
          display: "inline",
          justifyContent: "center",
          padding: "24px",
          backgroundColor: "rgb(16/20/24)",
          borderWidth: "1px 1px",
          borderRadius: "12px 12px 0px 0px",
          borderStyle: "solid",
          borderColor: "rgba(218, 224, 231, 0.08)",
        }}
      >
        //Systems//
        {myAccordion}
      </Container>
    </ThemeProvider>
  );
}

export default AccordionHandler;

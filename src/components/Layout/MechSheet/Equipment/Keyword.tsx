import { Box, Grid, Typography } from "@mui/material";
import { keywordColours } from "../../../Variables/colors";

interface keywordsProps {
  name: string;
  qualities: {
    turn?: string;
    range?: string;
    recommended?: boolean;
    hacking?: string;
  };
  size?: string;
}

interface props {
  text: string;
}

let fontSize = 12;

export default function GenerateKeywords({
  name,
  qualities,
  size,
}: keywordsProps) {
  let keywordsToRender = [];
  let gridWidth = "100%";

  if (size == "small") {
    gridWidth = "80%";
  }

  if (qualities?.turn) {
    keywordsToRender.push(
      <Grid item xs={4} key={name + "-Keyword-Turn-Grid-Item"}>
        <Keyword text={qualities?.turn} key={name + "-Keyword-Turn"} />{" "}
      </Grid>
    );
  }

  if (qualities?.range) {
    keywordsToRender.push(
      <Grid item xs={4} key={name + "-Keyword-Range-Grid-Item"}>
        <Keyword text={qualities?.range} key={name + "-Keyword-Range"} />{" "}
      </Grid>
    );
  }
  if (qualities?.recommended) {
    keywordsToRender.push(
      <Grid item xs={4} key={name + "-Keyword-Recommended-Grid-Item"}>
        <Keyword text="Recommended" key={name + "-Keyword-Recommended"} />
      </Grid>
    );
  }

  return (
    <Box
      display="flex"
      sx={{
        width: gridWidth,
      }}
    >
      <Grid container spacing={2}>
        {keywordsToRender}
      </Grid>
    </Box>
  );
}

function Keyword({ text }: props) {
  let colour = keywordColours.recommended;
  if (text == "Passive" || text == "Free Action") {
    colour = keywordColours.passive;
  } else if (text == "Short Turn" || text == "Long Turn") {
    colour = keywordColours.turn;
  } else if (
    text == "Close Range" ||
    text == "Medium Range" ||
    text == "Long Range"
  ) {
    colour = keywordColours.range;
  } else if (text == "Hacking") {
    colour = keywordColours.hacking;
  } else if (text == "Recommended") {
    colour = keywordColours.recommended;
  }
  return (
    <Box //Border
      margin="0px 0px 0px 0px"
      padding="0px 2px 0px 2px"
      // width="100px"
      maxWidth="100%"
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        backgroundColor: colour,
      }}
    >
      <Typography
        display="block"
        noWrap
        color={keywordColours.text}
        variant="subtitle1"
        sx={{ textAlign: "center", fontSize: 15 }}
      >
        {text}
      </Typography>
    </Box>
  );
}

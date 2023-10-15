import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import {
  titletextprimary,
  titletextsecondary,
  titlecardprimary,
  titlecardsecondary,
} from "../../Variables/colors";
import { useAppDispatch, useAppSelector } from "../../../redux/Hooks";
import { saveMechName } from "../../../redux/UnionSlice";
import { getMech } from "../../Pages/MechPage";
import { useState, useEffect } from "react";
import {
  selectActiveCrawler,
  selectActiveMech,
} from "../../../redux/ActiveSelectionsSlice";

function generatePatternNameText(text: string | null) {
  const localMech = getMech();
  const dispatch = useAppDispatch();
  const [name, setName] = useState(localMech.name);
  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);

  let newMechInfo = {
    info: name,
    crawlerID: crawlerID,
    mechID: mechID,
  };
  useEffect(() => {
    dispatch(saveMechName(newMechInfo));
  });

  return (
    <>
      <Box
        sx={{
          width: "fit-content",
          m: "auto",
          p: "8px",
          backgroundColor: titlecardprimary,
          boxShadow: "1px 1px 5px black",
        }}
      >
        <TextField
          margin="dense"
          value={localMech.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          variant="standard"
          inputProps={{
            style: {
              color: titletextprimary,
              textAlign: "center",
              fontSize: 40,
              minWidth: "30px",
            },
          }}
        />
      </Box>
    </>
  );
}
function generateChassisNameText(text: string | null) {
  return (
    <>
      <Box
        sx={{
          width: "fit-content",
          ml: "0px",
          p: "8px",
          backgroundColor: titlecardsecondary,

          boxShadow: "1px 1px 5px black",

          borderWidth: "1px 1px",
          borderStyle: "solid",
          borderColor: "rgba(218, 224, 231, 0.08)",
        }}
      >
        <Typography
          marginLeft="3px"
          display="flex"
          color={titletextsecondary}
          variant="subtitle1"
          sx={{ textAlign: "center", fontSize: 20 }}
        >
          {"Chassis: " + text}
        </Typography>
      </Box>
    </>
  );
}

function TitleCard() {
  const mech = getMech();
  if (!mech) {
    return;
  }
  return (
    <>
      <Container sx={{ justifyContent: "center", mb: "2em" }}>
        <Box sx={{ m: "auto", width: "50%" }}>
          {generatePatternNameText(mech.name)}
          <Stack
            width="100%"
            direction="row"
            spacing={0}
            sx={{ ml: "auto", mr: "auto" }}
          >
            <Box sx={{ width: "50%" }}></Box>
            {generateChassisNameText(mech.chassis)}
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default TitleCard;

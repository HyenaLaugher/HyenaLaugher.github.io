import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {
  chassisselectbackground,
  chassisselectimgborder,
} from "../../Variables/colors";
import Image from "mui-image";
import { listOfChassis } from "../../Variables/listofchassis";
import { useAppDispatch, useAppSelector } from "../../../redux/Hooks";
import { saveNewMech, selectDatabase } from "../../../redux/UnionSlice";
import { useEffect, useState } from "react";
import {
  saveActiveCrawler,
  saveActiveMech,
  selectActiveCrawler,
} from "../../../redux/ActiveSelectionsSlice";

interface chassisSelectProps {
  open: boolean;
  // onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  onClose: () => void;
  onSelected: () => void;
}

interface requestNameProps {
  open: boolean;
  onClose: () => void;
  onSelected: () => void;
  closeChassisSelect: () => void;
}

interface gridProps {
  requestNameEvent: () => void;
}
interface chassisCardProps {
  item: {
    // id: number;
    imgUrl: string;
    chassis: string;
    stats: {
      structurepoints: number;
      energypoints: number;
      heatcap: number;
      systemslots: number;
      moduleslots: number;
      cargocap: number;
      techlevel: number;
      salvagevalue: number;
    };
  };
  requestNameEvent: () => void;
}

function createText(
  // fieldName: string,
  //id: number,
  data: string, // | number,
  name?: boolean
) {
  let bt = name ? 0 : 1;
  let bb = name ? 1 : 1;
  let bl = name ? 0 : 1;
  let br = name ? 0 : 1;

  return (
    <Box
      sx={{
        borderWidth: "1px 1px",
        borderStyle: "solid",
        borderColor: chassisselectimgborder,
        pl: "3px",
        borderTop: bt,
        borderBottom: bb,
        borderLeft: bl,
        borderRight: br,
      }}
    >
      <Typography //id={"chassis-name-" + id}
        variant="subtitle2"
        component="h2"
      >
        {data}
      </Typography>
    </Box>
  );
}

function CreateNewMech(data?: any) {
  const blankMech = {
    name: data?.name ?? "",
    chassis: data?.chassis ?? "",
    imgUrl: data?.imgUrl ?? "",
    stats: {
      // id: item.id,
      structurepoints: data?.stats.structurepoints ?? 0,
      energypoints: data?.stats.energypoints ?? 0,
      heatcap: data?.stats.heatcap ?? 0,
      systemslots: data?.stats.systemslots ?? 0,
      moduleslots: data?.stats.moduleslots ?? 0,
      cargocap: data?.stats.cargocap ?? 0,
      techlevel: data?.stats.techlevel ?? 0,
      salvagevalue: data?.stats.salvagevalue ?? 0,
    },
    modules: data?.modules ?? [],
    systems: data?.systems ?? [],
    cargo: data?.cargo ?? [],
  };
  return blankMech;
}

function UpdateLocalMech(newData: any) {
  UpdateNewMechName(newData.name);
  localMech.chassis = newData?.chassis ?? localMech.chassis;
  localMech.imgUrl = newData?.imgUrl ?? localMech.imgUrl;
  localMech.stats = newData?.stats ?? localMech.stats;

  localMech.modules = newData?.modules ?? localMech.modules;
  localMech.systems = newData?.systems ?? localMech.systems;
  console.log("Update", localMech);
}

function UpdateNewMechName(name: string) {
  localMech.name = name ?? localMech.name;
}

function ChassisGrid(props: gridProps) {
  const displayChassis = listOfChassis.map((item) => {
    return (
      <Grid item xs={4} sm={4} md={4} key={item.id}>
        <ChassisCard
          item={item}
          requestNameEvent={props.requestNameEvent}
          key={item.id}
        />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{ overflowY: "scroll" }}
      height="90%"
      mt="20px"
    >
      {displayChassis}
    </Grid>
  );
}

function ChassisCard(props: chassisCardProps) {
  const displayedChassis = CreateNewMech(props.item);
  return (
    <Box
      onClick={() => {
        UpdateLocalMech(displayedChassis);
        props.requestNameEvent();
      }}
      sx={{
        borderWidth: "2px 2px",
        borderStyle: "solid",
        borderColor: chassisselectimgborder,
        p: "4px",
      }}
    >
      <Stack width="100%" spacing={0} sx={{ ml: "auto", mr: "auto" }}>
        <Box
          sx={{
            display: "flex",
            borderWidth: "2px 2px",
            borderStyle: "solid",
            borderColor: chassisselectimgborder,
          }}
        >
          <Image src={displayedChassis.imgUrl} showLoading duration={0} />
        </Box>
        {createText(displayedChassis.chassis, true)}
        <Grid
          mt="1px"
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-sp"}>
            {createText("SP: " + displayedChassis.stats.structurepoints)}
          </Grid>
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-ep"}>
            {createText("EP: " + displayedChassis.stats.energypoints)}
          </Grid>
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-hc"}>
            {createText("HC: " + displayedChassis.stats.heatcap)}
          </Grid>

          <Grid item xs={4} key={displayedChassis.chassis + "-stats-ss"}>
            {createText("System Slots: " + displayedChassis.stats.systemslots)}
          </Grid>
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-ms"}>
            {createText("Module Slots: " + displayedChassis.stats.moduleslots)}
          </Grid>
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-cc"}>
            {createText("Cargo Cap: " + displayedChassis.stats.cargocap)}
          </Grid>

          <Grid item xs={4} key={displayedChassis.chassis + "-stats-tl"}>
            {createText("Tech Level: " + displayedChassis.stats.techlevel)}
          </Grid>
          <Grid item xs={4} key={displayedChassis.chassis + "-stats-sv"}>
            {createText("Scrap Value: " + displayedChassis.stats.salvagevalue)}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

function RequestName({
  open,
  onClose,
  onSelected,
  closeChassisSelect,
}: requestNameProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    dispatch(saveActiveCrawler(0)); //TODO: Hardcode it to be the first Crawler
    newMech.name = localMech.name = name;
  });

  const unionDatabase = useAppSelector(selectDatabase);
  const crawlerID = useAppSelector(selectActiveCrawler);
  let newMech = Object.assign([], localMech, {
    crawlerID: crawlerID,
    mechID: 0,
  }); //MECHID isn't used

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          minWidth="800px"
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            height: "75%",
            bgcolor: chassisselectbackground,
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Name
          </Typography>
          <TextField
            margin="dense"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="standard"
            inputProps={{
              style: { textAlign: "center", fontSize: 40 },
            }}
          />

          <Box
            display="flex"
            onClick={() => {
              console.log(
                "Click - Confirm Mech Creation - Name has been inputted"
              );
              onClose();
              closeChassisSelect();

              if (crawlerID == undefined) {
                return;
              }

              onSelected();

              const mechID = unionDatabase.crawlers[crawlerID].mechBay.length;
              newMech.mechID = mechID;
              dispatch(saveActiveMech(mechID));

              //Save Data
              console.log(
                "Create Mech 1",
                unionDatabase.crawlers[crawlerID].mechBay
              );
              dispatch(saveNewMech(newMech));
              console.log(
                "Create Mech 2",
                unionDatabase.crawlers[crawlerID].mechBay
              );
            }}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            Add Mech to Mech Bay
          </Box>
        </Box>
      </Modal>
    </>
  );
}
var localMech = CreateNewMech();

export default function ChassisSelect({
  open,
  onClose,
  onSelected,
}: chassisSelectProps) {
  const [openName, setNameOpen] = useState(false);
  const handleNameOpen = () => setNameOpen(true);
  const handleNameClose = () => setNameOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          minWidth="800px"
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            height: "75%",
            bgcolor: chassisselectbackground,
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Chassis Select
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Choose the chassis that you wish to use.
          </Typography>

          <ChassisGrid requestNameEvent={handleNameOpen} />
          <RequestName
            open={openName}
            onClose={handleNameClose}
            onSelected={onSelected}
            closeChassisSelect={onClose}
          />
        </Box>
      </Modal>
    </>
  );
}

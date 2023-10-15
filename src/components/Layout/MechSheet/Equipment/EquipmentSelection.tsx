import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Modal,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {
  equipmentselectbackground,
  equipmentselectbutton,
  equipmentselectforeground,
  loadoutboxbodytext,
} from "../../../Variables/colors";

import EquipmentName from "./EquipmentName";
import { useAppSelector, useAppDispatch } from "../../../../redux/Hooks";
import { saveMechModules, saveMechSystems } from "../../../../redux/UnionSlice";
import InfoIconTray from "../../../Entity/InfoIconTray";
import KeywordsGrid from "./Keyword";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { listOfModules } from "../../../Variables/listofmodules";
import { listOfSystems } from "../../../Variables/listofsystems";
import { getMech } from "../../../Pages/MechPage";
import {
  selectActiveCrawler,
  selectActiveMech,
} from "../../../../redux/ActiveSelectionsSlice";

interface props {
  open: boolean;
  onClose?: () => void;
  equipmentType: string;
  // onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

interface headerProps {
  onClose?: () => void;
}

interface CapacityDisplayTagProps {
  equipmentType: string;
  usedSlots: number;
  slotCap: number;
}

interface listProps {
  onClick: (e: number) => void;
  remainingSlots: number;
  equipmentList: number[];
  equipmentType: string;
}

interface descProps {
  selectedItem: number;
  onClick: () => void;
  valid: boolean;
  equipmentType: string;
}

export const checkIfDuplicate = (
  modToCheck: Number,
  currentModuleList: number[]
) => {
  for (let i = 0; i < currentModuleList.length; i++) {
    if (currentModuleList[i] == modToCheck) {
      //We have a duplicate
      return false;
    }
  }

  return true;
};

export const checkIfCapacity = (
  modIdx: number,
  remainingSlots: number,
  equipmentType: string
) => {
  let list = equipmentType == "Modules" ? listOfModules : listOfSystems;

  if (list[modIdx].qualities.slotValue <= remainingSlots) {
    //We have enough points to equip
    return true;
  }
  return false;
};

export const checkIfValid = (
  modIdToCheck: number,
  remainingSlots: number,
  currentModuleList: number[],
  equipmentType: string
) => {
  if (
    checkIfCapacity(modIdToCheck, remainingSlots, equipmentType)
    // &&checkIfDuplicate(modIdToCheck, currentModuleList)
  ) {
    return true;
  }
  return false;
};

function EquipmentList(props: listProps) {
  return (
    <Box
      display="flex"
      p="0px 0px 0px 10px"
      marginLeft="0px"
      marginRight="auto"
      marginBottom="0px"
      maxWidth="45%"
      sx={{
        backgroundColor: equipmentselectbackground,
      }}
    >
      <Stack
        display="flex"
        spacing={2}
        p="10px 0px 10px 0px"
        sx={{
          overflowY: "scroll",
        }}
      >
        <CreateList {...props} />
      </Stack>
    </Box>
  );
}

function CreateList({
  onClick,
  remainingSlots,
  equipmentList,
  equipmentType,
}: listProps) {
  let list = equipmentType == "Modules" ? listOfModules : listOfSystems;
  let equipmentToRender = [];
  let previousTechLevel = 0;
  let enableDivider = false;
  for (let modIdx = 0; modIdx < list.length; modIdx++) {
    enableDivider = false;

    if (list[modIdx].qualities.techLevel > previousTechLevel) {
      enableDivider = true;
      previousTechLevel = list[modIdx].qualities.techLevel;
    }

    equipmentToRender.push(
      <Box key={"Divider-" + list[modIdx].name + "" + equipmentToRender.length}>
        {enableDivider && (
          <Typography>
            Tech Divider {list[modIdx].qualities.techLevel}
          </Typography>
        )}
        <EquipmentName
          name={list[modIdx].name}
          techLevel={list[modIdx].qualities.techLevel}
          valid={checkIfValid(
            modIdx,
            remainingSlots,
            equipmentList,
            equipmentType
          )}
          onClick={() => {
            onClick(modIdx);
          }}
        />
      </Box>
    );
  }

  return equipmentToRender;
}

function EquipmentDescription({
  selectedItem,
  onClick,
  valid,
  equipmentType,
}: descProps) {
  let list = equipmentType == "Modules" ? listOfModules : listOfSystems;
  return (
    <>
      <Box
        p="15px"
        maxWidth="60%"
        minWidth="55%"
        sx={{
          backgroundColor: equipmentselectbackground,
        }}
      >
        <Typography
          display="flex"
          variant="h4"
          justifyContent="center"
          color={loadoutboxbodytext}
        >
          {list[selectedItem].name}
        </Typography>
        <Divider
          sx={{ marginBottom: "15px" }}
          orientation="horizontal"
          flexItem
        ></Divider>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <InfoIconTray
              techLevel={list[selectedItem].qualities.techLevel}
              slotValue={list[selectedItem].qualities.techLevel}
              salvageValue={list[selectedItem].qualities.techLevel}
            />

            <Typography display="flex" color={loadoutboxbodytext} paragraph>
              {list[selectedItem].fulldescription}
            </Typography>
          </Stack>

          <KeywordsGrid
            name={list[selectedItem].name}
            qualities={list[selectedItem].qualities}
          />

          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClick}
            disabled={!valid}
          >
            Equip
          </Button>
        </Stack>
      </Box>
    </>
  );
}

function ModalHeader({ onClose }: headerProps) {
  return (
    <>
      <Box
        m="0px"
        p="5px"
        display="flex"
        height="auto"
        sx={{ backgroundColor: "rgba( 100,0,0,1)" }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          marginLeft="0px"
          marginRight="auto"
        >
          Module Selection
        </Typography>

        <IconButton size="medium" onClick={onClose} sx={{ borderRadius: 2 }}>
          <CloseIcon fontSize="large" style={{ color: loadoutboxbodytext }} />
        </IconButton>
      </Box>
      <Box
        m="0px"
        p="0px 0px 10px 10px"
        display="flex"
        width="auto"
        height="auto"
        sx={{ backgroundColor: "rgba( 100,0,0,1)" }}
      >
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Add a module to your rig.
        </Typography>
      </Box>
    </>
  );
}

function CapacityDisplayTag({
  equipmentType,
  usedSlots,
  slotCap,
}: CapacityDisplayTagProps) {
  return (
    <Box
      m="0px"
      p="0px"
      display="flex"
      width="100%"
      sx={{ backgroundColor: "rgba( 100,0,0,0)" }}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        marginLeft="auto"
        marginRight="0px"
        paddingRight="10px"
        paddingLeft="10px"
        bgcolor={"rgba( 100,100,0,1)"}
      >
        {equipmentType} Capacity {usedSlots} / {slotCap}
      </Typography>
    </Box>
  );
}

export default function AddEquipmentScreen({
  open,
  onClose,
  equipmentType,
}: props) {
  const [selectedItem, setSelectedItem] = useState(0);
  let ID = selectedItem;
  useEffect(() => {
    ID = selectedItem;
  });

  const mech = getMech();
  const dispatch = useAppDispatch();
  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);

  let equippedList = equipmentType == "Modules" ? mech.modules : mech.systems;
  // let list = equipmentType == "Modules" ? listOfModules : listOfSystems;

  // let equipmentList = mech.modules ?? [];
  let slotCap =
    equipmentType == "Modules"
      ? mech.stats.moduleslots
      : mech.stats.systemslots;

  let usedSlots = getUsedPoints(equippedList, equipmentType);
  let remainingSlots = slotCap - usedSlots ?? 0; //Might not be used

  return (
    <ThemeProvider theme={loadoutTheme}>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Container sx={style}> */}
        <Box
          sx={{
            p: 4,
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "rgba( 50,0,0,1)",

            width: "60%",
            height: "80%",

            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <ModalHeader onClose={onClose} />

          <Box m="15px " p="0px " height="80%">
            <CapacityDisplayTag
              equipmentType={equipmentType}
              slotCap={slotCap}
              usedSlots={usedSlots}
            />

            <Box
              m="0px"
              p="0px"
              display="flex"
              width="100%"
              height="100%"
              sx={{ overflow: "hidden", backgroundColor: "rgba(0,0,100,0)" }}
            >
              <EquipmentList
                // type="Module"
                onClick={setSelectedItem}
                remainingSlots={remainingSlots}
                equipmentList={equippedList}
                equipmentType={equipmentType}
              />
              <EquipmentDescription
                selectedItem={ID}
                valid={checkIfValid(
                  selectedItem,
                  remainingSlots,
                  equippedList,
                  equipmentType
                )}
                equipmentType={equipmentType}
                onClick={() => {
                  //Check to see if this should be clickable
                  if (
                    checkIfValid(
                      selectedItem,
                      remainingSlots,
                      equippedList,
                      equipmentType
                    )
                  ) {
                    let updatedArray = Object.assign([], equippedList);
                    updatedArray.push(selectedItem);

                    let newMech = {
                      crawlerID: crawlerID,
                      mechID: mechID,
                      equipment: updatedArray,
                    };

                    if (equipmentType == "Modules") {
                      dispatch(saveMechModules(newMech));
                    } else {
                      dispatch(saveMechSystems(newMech));
                    }
                  }
                }}
              />
            </Box>
          </Box>
          {/* </Container> */}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export function getUsedPoints(list: number[], equipmentType: string) {
  //Probably better to find a new place for this
  let usedSlots = 0;
  let equipmentList =
    equipmentType == "Modules" ? listOfModules : listOfSystems;

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      usedSlots += equipmentList[list[i]].qualities.slotValue;
    }
  }

  return usedSlots | 0;
}

const loadoutTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: equipmentselectforeground,
      dark: equipmentselectbackground,
    },
    secondary: { main: equipmentselectbutton },

    // text: {
    //   primary: "rgba(129,45,45,0.87)",
    //   secondary: "rgba(132, 146, 166, 1)",
    //   disabled: "rgba(60, 72, 88, 0.38)",
    // },
  },
});
const style = {
  p: 4,

  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 800,
  bgcolor: "rgba( 50,0,0,1)",
  // width: "fit-content",
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

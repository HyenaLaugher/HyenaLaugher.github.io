import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  swapicon,
  closeicon,
  background,
  loadoutboxprimary,
  loadoutboxbodytext,
} from "../../../Variables/colors";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { getMech } from "../../../Pages/MechPage";
import { useAppDispatch, useAppSelector } from "../../../../redux/Hooks";
import { saveMechCargo } from "../../../../redux/UnionSlice";
import {
  listOfT1Scrap,
  listOfT2Scrap,
  listOfT3Scrap,
  listOfT4Scrap,
  listOfT5Scrap,
  listOfT6Scrap,
} from "../../../Variables/listofscrap";
import {
  selectActiveCrawler,
  selectActiveMech,
} from "../../../../redux/ActiveSelectionsSlice";

interface popoverProps {
  open: boolean;
  handlePopoverClose: () => void;
  anchorEl: HTMLElement | null;
}

interface selectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

function AmountSelect({ value, onChange }: selectProps) {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Scrap-Popover-Amount-Select-Label">Amount</InputLabel>
        <Select
          id="Scrap-Popover-Amount-Select"
          value={value}
          label="Amount"
          onChange={onChange}
        >
          <MenuItem value={"1"}>1x</MenuItem>
          <MenuItem value={"2"}>2x</MenuItem>
          <MenuItem value={"3"}>3x</MenuItem>
          <MenuItem value={"4"}>4x</MenuItem>
          <MenuItem value={"5"}>5x</MenuItem>
          <MenuItem value={"6"}>6x</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

function TierSelect({ value, onChange }: selectProps) {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Scrap-Popover-Tier-Select-Label">Tier</InputLabel>
        <Select
          id="Scrap-Popover-Tier-Select"
          displayEmpty
          value={value}
          label="Tier"
          onChange={onChange}
        >
          <MenuItem value={"T1"}>Tier 1</MenuItem>
          <MenuItem value={"T2"}>Tier 2</MenuItem>
          <MenuItem value={"T3"}>Tier 3</MenuItem>
          <MenuItem value={"T4"}>Tier 4</MenuItem>
          <MenuItem value={"T5"}>Tier 5</MenuItem>
          <MenuItem value={"T6"}>Tier 6</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default function AddScrapPopover({
  open,
  handlePopoverClose,
  anchorEl,
}: popoverProps) {
  const [amount, setAmount] = useState("1");
  const [tier, setTier] = useState("T1");

  const handleAmountChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };

  const handleTierChange = (event: SelectChangeEvent) => {
    setTier(event.target.value as string);
  };

  const crawlerID = useAppSelector(selectActiveCrawler);
  const mechID = useAppSelector(selectActiveMech);
  const mech = getMech();
  const dispatch = useAppDispatch();

  const AddScrapOnClick = () => {
    let newCargo = mech.cargo.concat(createNewCargo(Number(amount), tier));

    let cargoSaveObject = {
      crawlerID: crawlerID,
      mechID: mechID,
      equipment: newCargo,
    };
    dispatch(saveMechCargo(cargoSaveObject));
  };

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
        p="5px"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: loadoutboxprimary,
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        <AmountSelect value={amount} onChange={handleAmountChange} />
        <TierSelect value={tier} onChange={handleTierChange} />

        <IconButton
          size="medium"
          sx={{ color: { background }, borderRadius: 2 }}
          onClick={AddScrapOnClick}
          // onClick={() => {
          //   // let oldCargoArray = Object.assign([], mech.cargo);
          //   let newCargo = mech.cargo.concat(
          //     createNewCargo(Number(amount), tier)
          //   );

          //   let cargoSaveObject = {
          //     crawlerID: crawlerID,
          //     mechID: mechID,
          //     equipment: newCargo,
          //   };
          //   dispatch(saveMechCargo(cargoSaveObject));
          // }}
        >
          <AddIcon fontSize="large" style={{ color: loadoutboxbodytext }} />
        </IconButton>
      </Box>
    </Popover>
  );
}

function createNewCargo(amount: number, tier: string) {
  let scrapArray: string[];
  scrapArray = [];

  // Using match with regEx
  // let matches = tier.match(/(\d+)/);
  // console.log(matches);
  let list = listOfT1Scrap;
  switch (tier) {
    case "T1":
      list = listOfT1Scrap;
      break;
    case "T2":
      list = listOfT2Scrap;
      break;
    case "T3":
      list = listOfT3Scrap;
      break;
    case "T4":
      list = listOfT4Scrap;
      break;
    case "T5":
      list = listOfT5Scrap;
      break;
    case "T6":
      list = listOfT6Scrap;
      break;
    default:
      throw new Error("NO LIST FOUND");
  }
  console.log(list);

  for (var i = 0; i < amount; i++) {
    scrapArray.push(
      "Scrap-" + tier + "-" + Math.floor(Math.random() * list.length)
    );
  }
  return scrapArray;
}

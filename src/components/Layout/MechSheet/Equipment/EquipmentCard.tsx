import { Grid, Stack, Typography, Container, Box } from "@mui/material";
import IconTray from "../../../Entity/IconTray";
import InfoIconTray from "../../../Entity/InfoIconTray";
import KeywordsGrid from "./Keyword";
import { MouseEventHandler, useState } from "react";
import {
  loadoutboxprimary,
  loadoutboxsecondary,
  loadoutboxheadertext,
  loadoutboxbodytext,
} from "../../../Variables/colors";
import InfoPopup from "./InfoPopup";
import { listOfModules } from "../../../Variables/listofmodules";
import { listOfSystems } from "../../../Variables/listofsystems";

interface equipmentCardProps {
  id: number;
  equipmentType: string;
  onCloseClick?: (e: any) => void;
}

interface titleProps {
  name: string;
  onCloseClick?: (e: any) => void;
}

interface closeClick {
  onCloseClick?: (e: any) => void;
}

interface infoProps {
  name: string;
  qualities: {
    techLevel: number;
    slotValue: number;
    salvageValue: number;

    turn?: string;
    range?: string;
    recommended?: boolean;
    hacking?: string;
  };
  shortdescription: string;
  onClick?: MouseEventHandler;
}
function AddIconTray({ onCloseClick }: closeClick) {
  if (onCloseClick) {
    return <IconTray onCloseClick={onCloseClick} />;
  }
  return null;
}

function BoxTitle({ name, onCloseClick }: titleProps) {
  return (
    <Box display="flex" sx={{ backgroundColor: loadoutboxprimary }}>
      <Typography
        variant="h6"
        color={loadoutboxheadertext}
        marginLeft="1em"
        marginRight="auto"
      >
        {name}
      </Typography>

      <AddIconTray onCloseClick={onCloseClick} />
    </Box>
  );
}

function BoxInfo({ name, qualities, shortdescription, onClick }: infoProps) {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <InfoIconTray
          techLevel={qualities.techLevel}
          slotValue={qualities.slotValue}
          salvageValue={qualities.salvageValue}
        />
        <Box
          sx={{
            justifyContent: "flex-end",
            height: "100%",
            width: "100%",
          }}
          margin="1em"
          onClick={onClick}
        >
          <Typography
            display="block"
            color={loadoutboxbodytext}
            fontSize="16px"
          >
            {shortdescription}
          </Typography>
          <KeywordsGrid name={name} qualities={qualities} size="small" />
        </Box>
      </Stack>
    </>
  );
}

export default function EquipmentCard({
  id,
  equipmentType,
  onCloseClick,
}: equipmentCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let list = equipmentType == "Modules" ? listOfModules : listOfSystems;

  let item = {
    id: id,
    name: list[id].name,
    qualities: list[id].qualities,
    shortdescription: list[id].shortdescription,
    fulldescription: list[id].fulldescription,
    diceRoll: list[id]?.diceRoll,
  };

  if (list[id]?.diceRoll) {
    console.log("WE HAVE ", id, list[id]?.diceRoll);
  }

  return (
    <Grid item xs={4}>
      <Container // Short Details -> Click to spawn in an info dialog box with the item.description
        disableGutters
        maxWidth={false}
        sx={{
          margin: "5px",
          height: "130px",
          backgroundColor: loadoutboxsecondary,
          clipPath: "polygon(100% 0, 100% 75%, 90% 100%, 0 100%, 0 0)",
          "&:hover": {
            background: "green",
            cursor: "pointer",
          },
        }}
      >
        <BoxTitle name={item.name} onCloseClick={onCloseClick} />
        <BoxInfo
          name={item.name}
          qualities={item.qualities}
          shortdescription={item.shortdescription}
          onClick={handleOpen}
        />
        <InfoPopup open={open} onClose={handleClose} {...item}></InfoPopup>
      </Container>
    </Grid>
  );
}

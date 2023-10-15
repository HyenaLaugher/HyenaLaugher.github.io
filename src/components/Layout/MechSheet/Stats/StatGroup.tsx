import { Container, Grid, Stack } from "@mui/material";
import Heading from "../../../Entity/Heading";
import StatField from "./StatField";

interface props {
  statsArr: statsToDisplay[];
  groupName?: string;
}

interface statsToDisplay {
  id: number;
  name: string;
  value: number;
  cap?: number;
  onDataChange?: (e: any) => void;
}

export default function StatGroup({ statsArr, groupName }: props) {
  const displayStats = statsArr.map((item) => {
    return (
      <StatField
        key={item.id}
        id={item.id}
        name={item.name}
        value={item.value}
        cap={item.cap}
        onDataChange={item.onDataChange}
      ></StatField>
    );
  });

  return (
    <Container
      disableGutters
      sx={{
        margin: "0px",
        pl: "0px",
        pr: "0px",
        pt: "5px",
        pb: "5px",
        height: "fit-content",
      }}
    >
      <Stack>
        <Heading title={groupName} />

        <Grid
          container
          spacing={0}
          sx={{
            width: "auto",
          }}
        >
          {displayStats}
        </Grid>
      </Stack>
    </Container>
  );
}

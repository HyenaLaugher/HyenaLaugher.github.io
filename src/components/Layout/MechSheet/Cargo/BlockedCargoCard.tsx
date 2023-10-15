import { Box } from "@mui/material";

export default function BlockedCargoCard() {
  return (
    <Box
      height="50px"
      sx={{
        borderWidth: 0.1,
        borderStyle: "dashed",
        borderColor: "black",
        background:
          "linear-gradient(to right bottom, grey, grey 48%, white 49%, white 51%, grey 52%, grey) ",
      }}
    ></Box>
  );
}

import "./App.css";

import { sheetbackground } from "./components/Variables/colors";
import { Box, Container } from "@mui/material/";
import MechPage from "./components/Pages/MechPage";
import NavBar from "./components/Entity/NavBar";

export default function App() {
  return (
    <>
      <Container // Wallpaper
        disableGutters
        maxWidth={false}
        sx={{
          width: "99vw",
          maxWidth: "100%",
          overflowX: "hidden",
          // height: "100em",
          minHeight: "100em",
          background: sheetbackground,
          boxShadow: "inset 0px 0px 300px 40px hsl(207, 82%, 62%)",
        }}
      >
        <MechPage />
        <NavBar />
        {/* <Box sx={{ height: "50%", width: "100%" }}>
          <Box
            sx={{
              height: "75%",
              width: 120,
              display: "inline-block",
              p: 1,
              mx: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Height 75%
          </Box>
        </Box> */}
      </Container>
    </>
  );
}

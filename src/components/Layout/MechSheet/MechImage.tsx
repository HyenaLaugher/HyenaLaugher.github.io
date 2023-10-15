import { Container, Box, Stack } from "@mui/material";
import Image from "mui-image";
import HoloTag from "../../Entity/HoloTag";
import { getMech } from "../../Pages/MechPage";

export default function MechImage() {
  const mech = getMech();
  const imgURL = mech.imgUrl;
  return (
    <Container
      disableGutters
      sx={{
        m: "0px 10px 0px 10px",
        p: "0px 50px 0px 0px",
        width: "auto",
      }}
    >
      <HoloTag title="Image" padding="0px 0px 0px 0px">
        <Stack>
          <Box
            sx={{
              width: "40em",
              height: "40em",
              display: "flex",
            }}
          >
            <Image src={imgURL} duration={0} />
          </Box>

          {/* <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>  */}
        </Stack>
      </HoloTag>
    </Container>
  );
}

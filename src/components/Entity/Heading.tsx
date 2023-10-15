import { Box, Typography } from "@mui/material";
import { heading, headingtext, headingborder } from "../Variables/colors";

interface props {
  title?: string;
}

function Heading({ title }: props) {
  return (
    <Box
      sx={{
        // margin: "0px",
        ml: "0px",
        mr: "auto",
        padding: "0px",
        height: "fit-content",
        width: "100%",
        // backgroundColor: "rgba(100, 100, 100, 255)",
        backgroundColor: headingborder,
        // boxShadow: "1px 1px 5px black",
        // clipPath: "polygon(80% 0, 100% 100%, 0 100%, 0 0)",

        clipPath:
          "polygon(90% 0, 100% 100%, 85% 100%, 75% 0, 70% 0, 80% 100%, 0 100%, 0 0)",
      }}
    >
      <Box
        sx={{
          margin: "1px",
          // ml: "0px",
          // mr: "auto",
          // padding: "0px",
          // height: "fit-content",
          width: "100%",
          // backgroundColor: "rgba(20, 40, 100, 255)",
          backgroundColor: heading,
          // boxShadow: "1px 1px 5px black",
          // clipPath: "polygon(80% 0, 100% 100%, 0 100%, 0 0)",

          clipPath:
            "polygon(90% 0, 100% 100%, 85% 100%, 75% 0, 70% 0, 80% 100%, 0 100%, 0 0)",
        }}
      >
        <Typography
          marginLeft="3px"
          display="flex"
          color={headingtext}
          variant="h3"
        >
          // {title} //
        </Typography>
      </Box>
    </Box>
  );
}

export default Heading;

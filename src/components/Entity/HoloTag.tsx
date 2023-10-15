import { Box, Container, Typography } from "@mui/material";
import { holotag, titletext, background } from "../Variables/colors";
import { ReactNode, PropsWithChildren } from "react";

interface props {
  padding: string;
  title: string;
  extraTag?: string;
}

export default function HoloTag(props: PropsWithChildren<props>) {
  return (
    <>
      <Box
        margin="0px 0px 0px 0px"
        p="0px"
        sx={{
          backgroundColor: holotag,
          clipPath: "polygon(40% 0,50% 101%, 0 101%, 0 0 )",
        }}
      >
        <Box
          display="flex"
          width="40%"
          sx={
            {
              // alignItems: "center",
              // backgroundColor: holotag,
              // gap: "1px",
            }
          }
        >
          <Box
            display="flex"
            ml="15px"
            sx={
              {
                // backgroundColor: holotag,
              }
            }
          >
            <Typography
              // display="flex"
              color={titletext}
              variant="h3"
              // ml="15px"
              noWrap
            >
              {props.title}
            </Typography>
          </Box>

          <Box
            display="flex"
            ml="auto"
            mr="15px"
            sx={
              {
                // backgroundColor: holotag,
              }
            }
          >
            <Typography
              // display="flex"
              color={titletext}
              variant="h3"
              mr="30px"
              noWrap
              // align="right"
            >
              {props.extraTag}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box //Border
        margin="0px 0px 0px 0px"
        padding="0px 0px 0px 0px"
        sx={{
          borderWidth: "3px 3px",
          borderStyle: "solid",
          borderColor: holotag,
        }}
      >
        <Box //Background
          margin="0px 0px 0px 0px"
          padding={props.padding}
          sx={{
            backgroundColor: background,
          }}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
}

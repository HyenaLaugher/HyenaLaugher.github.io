import { Box } from "@mui/material";

interface props {
  title: string;
}

function EntityBox({ title }: props) {
  return (
    <Box
      sx={{
        boxShadow: "1px 1px 5px black",
        margin: "auto",
        display: "inline-flex",
        justifyContent: "center",
        padding: "8px",
        backgroundColor: "primary.dark",
        borderWidth: "1px 1px",
        // borderRadius: "12px 12px 12px 12px",
        borderStyle: "solid",
        borderColor: "rgba(218, 224, 231, 0.08)",
      }}
    >
      <h2>// {title} //</h2>
    </Box>
  );
}

export default EntityBox;

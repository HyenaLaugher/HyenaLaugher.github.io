import { TextField } from "@mui/material";

interface props {
  value?: number | null;
  ml?: string;
  mr?: string;
  onDataChange?: (e: any) => void;
}

export default function IntegerField({ value, ml, mr, onDataChange }: props) {
  return (
    <TextField
      margin="dense"
      value={value}
      onChange={onDataChange}
      variant="standard"
      size="small"
      inputProps={{
        maxLength: 2,
        inputMode: "numeric",
        pattern: "[0-9]*",
        style: { textAlign: "center", fontSize: 20, width: "30px" },
      }}
      sx={{
        marginLeft: ml,
        marginRight: mr,
      }}
    />
  );
}

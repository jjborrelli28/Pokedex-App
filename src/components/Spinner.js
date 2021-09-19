import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function Spinner() {
  return (
    <Stack
      sx={{ width: "100%", color: "grey.500" }}
      spacing={2}
      className="spinner"
    >
      <LinearProgress color="red" />
    </Stack>
  );
}

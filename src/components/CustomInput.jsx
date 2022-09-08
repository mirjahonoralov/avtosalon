import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const CustomInput = ({ label, placeholder }) => {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <Typography>{label}</Typography>
      <TextField
        sx={{ width: "100%" }}
        size="small"
        placeholder={placeholder}
      />
    </Stack>
  );
};

export default CustomInput;

import { MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";

const CustomSelector = ({ label, value, handleChange, items }) => {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <Typography>{label}</Typography>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        //   label="Age"
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default CustomSelector;

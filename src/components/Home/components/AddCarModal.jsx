import { Close } from "@mui/icons-material";
import { Avatar, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomInput from "../../CustomInput";
import CustomSelector from "../CustomSelector";
import { TopItem } from "../Style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

const AddCarModal = ({ open, handleClose }) => {
  const items = ["item1", "item2", "item3", "item4"];
  const handleChange = () => null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={"80%"} sx={style} bgcolor="#fff">
        <Box
          display={"flex"}
          width="100%"
          justifyContent="space-between"
          mb={2}
        >
          <Box display={"flex"} gap="16px">
            <TopItem color="#CABDFF" />
            <Typography variant="h5" fontWeight={700}>
              Mashinalar
            </Typography>
          </Box>
          <Avatar
            sx={{ backgroundColor: "#EFEFEF", cursor: "pointer" }}
            onClick={handleClose}
          >
            <Close sx={{ color: "#000" }} />
          </Avatar>
        </Box>
        <Stack direction="row" spacing={3} sx={{ width: "100%" }}>
          <Stack spacing={3} sx={{ width: "100%" }}>
            <CustomSelector
              items={items}
              value={items[0]}
              label="Markasi"
              handleChange={handleChange}
            />
            <CustomInput label="Motor" placeholder={"Kiriting"} />
            <CustomInput label="Color" placeholder={"Kiriting"} />
            <CustomInput label="Gearbook" placeholder={"Kiriting"} />
          </Stack>
          <Stack spacing={3} sx={{ width: "100%" }}>
            <CustomSelector
              items={items}
              value={items[0]}
              label="Tanirovkasi"
              handleChange={handleChange}
            />
            <CustomInput label="Year" placeholder={"Kiriting"} />
            <CustomInput label="Distance" placeholder={"Kiriting"} />
            <CustomInput label="Narxi" placeholder={"Kiriting"} />
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddCarModal;

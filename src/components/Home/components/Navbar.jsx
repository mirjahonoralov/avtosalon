import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import avatar from "../../../assets/images/Avatar.svg";
import { NotificationsNoneOutlined } from "@mui/icons-material";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#000",
});

const Navbar = () => {
  return (
    <CustomAppBar position="static" color="primary">
      <Toolbar>
        <Box ml={"auto"}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Badge badgeContent={1} variant="dot" color="error">
              <NotificationsNoneOutlined color="inherit" />
            </Badge>
            <Avatar alt="avatar" src={avatar} />
          </Stack>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;

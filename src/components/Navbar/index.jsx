import React from "react";
import { Avatar, Right, Wrapper } from "./style";
import notification from "../../assets/icons/notification.svg";
import avatar from "../../assets/images/Avatar.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Right>
        <img src={notification} alt="notification" />
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>
      </Right>
    </Wrapper>
  );
};

export default Navbar;

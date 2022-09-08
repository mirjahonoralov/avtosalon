import React from "react";
import { Avatar, Button, Right, Wrapper } from "./style";
import notification from "../../assets/icons/notification.svg";
import person from "../../assets/icons/person.svg";
import avatar from "../../assets/images/Avatar.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button onClick={() => navigate("/main/models")}>
        <img src={person} alt="" /> Asosiyga qaytish
      </Button>
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

import React from "react";
import home from "../../../assets/icons/home.png";
import union from "../../../assets/icons/union.png";
import edit from "../../../assets/icons/edit.png";
import { List, SidebarWrapper } from "../style";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <List>
        <div>
          <img src={home} alt="" />
          <p>Asosiy</p>
        </div>
        <div>
          <img src={union} alt="" />
          <p>E’lonlar</p>
        </div>
        <div>
          <img src={edit} alt="" />
          <p>Savollar</p>
        </div>
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;

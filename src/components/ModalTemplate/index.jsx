import React from "react";
import { Modal, ModalBg, Top, TopItem, TopLeft } from "./style";
import closeIcon from "../../assets/icons/close.svg";

const ModalTemplate = ({ open, children, handleClose, isHuge }) => {
  if (open)
    return (
      <>
        <ModalBg />
        <Modal isHuge={isHuge}>
          <Top>
            <TopLeft>
              <TopItem color="#CABDFF" />
              <h5>Mashina qo’shish</h5>
            </TopLeft>
            <img src={closeIcon} alt="" onClick={handleClose} />
          </Top>
          {children}
        </Modal>
      </>
    );
};

export default ModalTemplate;

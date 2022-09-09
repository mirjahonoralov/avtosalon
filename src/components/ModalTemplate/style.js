import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #f4f4f4;
  opacity: 0.7;
`;

export const Modal = styled.div`
  width: 80%;
  height: ${({ isHuge }) => isHuge && "90%"};

  overflow-y: scroll;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 34px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  background: #fcfcfc;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    cursor: pointer;
  }
`;

export const TopLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  h5 {
    font-weight: 700;
  }
`;

export const TopItem = styled.div`
  width: 16px;
  height: 32px;
  background: ${({ color }) => color && color};
  border-radius: 4px;
`;

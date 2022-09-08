import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 340px;
  padding: 24px;
  background: #fcfcfc;
  height: 100vh;
  padding-top: 120px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  div {
    display: flex;
    gap: 14px;
    align-items: center;
  }
`;
export const Table = styled.table`
  width: 100%;
  background: #fcfcfc;
  border-spacing: 0;
  gap: 40px;
  thead {
    th {
      text-align: start;
      border-bottom: 1px solid silver;
      padding: 15px 10px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #6f767e;
      padding-left: 0;
    }
  }

  tbody {
    tr {
      td {
        border-bottom: 1px solid silver;
        padding: 15px 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #1a1d1f;
      }
    }
  }
`;

export const TopItem = styled.div`
  width: 16px;
  height: 32px;
  background: ${({ color }) => color && color};
  border-radius: 4px;
`;

export const ContentWrapper = styled.div`
  background: #e3e3e3;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export const ContentComponent = styled.div`
  display: flex;
  border-radius: 8px;
  background: #fcfcfc;
  padding: 24px 32px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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

export const Buttons = styled.div`
  display: flex;
  gap: 32px;
`;

export const Button = styled.div`
  padding: 12px 15px;
  background: #2a85ff;
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

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
  height: 90%;
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

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Page = styled.div`
  cursor: pointer;
  font-weight: ${({ active }) => active && "bold"};
`;

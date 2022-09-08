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

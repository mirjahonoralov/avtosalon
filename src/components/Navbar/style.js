import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 40px;
  height: 96px;
  background: #fcfcfc;
  box-shadow: inset 1px 0px 0px #f4f4f4;
  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  float: right;
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  img {
    width: 100%;
  }
`;

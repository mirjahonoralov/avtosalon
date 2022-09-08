import styled from "styled-components";

export const Container = styled.div`
  padding: 82px 94px;
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  width: 280px;

  p {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
  }
`;

export const ImgWrapper = styled.div`
  height: 150px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

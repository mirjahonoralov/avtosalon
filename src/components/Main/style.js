import styled from "styled-components";

export const BreadCrumbs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

export const Crumb = styled.div`
  padding: 5px;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const CarTypesWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 48px;
`;

export const CarTypeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 290px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #000000;
    }
  }
`;

export const ModelWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

export const ModelLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f6f6f6;
  border-radius: 8px;
  width: 396px;
  padding: 16px 24px;

  img {
    width: 100%;
  }

  p {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;

    span {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
    min-height: 350px;
  }
`;

export const Wrapper360 = styled.div`
  width: 32px;

  img {
    width: 100%;
  }
`;

export const Bottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2); ;
`;

export const ModelRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const RightTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 15px;
  }
`;

export const Selection = styled.form`
  display: flex;
  gap: 48px;

  div {
    display: flex;
    gap: 8px;
    align-items: center;

    label {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }

    input {
      accent-color: #000;
      width: 24px;
      height: 24px;
    }
  }
`;

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

export const ImgWrapper2 = styled.div`
  height: 150px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.div`
  padding: 12px 30px;
  background: #2a85ff;
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

import React from "react";
import styled from "styled-components";
import camera from "../assets/icons/camera.svg";
import Loading from "./Loading";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  img {
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #33383f;
  }

  input {
    display: none;
  }
`;

const UploadLabel = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  background: #f4f4f4;
  border-radius: 12px;
  height: 48px;
  padding-left: 12px;
  font-size: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 13px;
`;

const UploadFile = ({
  label,
  placeholder,
  onChange,
  name,
  imageName,
  uploading,
  isError,
}) => {
  return (
    <Wrapper>
      <UploadLabel>
        <p>{label}</p>
        {uploading && <Loading color={"red"} />}
      </UploadLabel>
      <Label htmlFor={label}>
        <img src={camera} alt="" />
        <p>{placeholder}</p>
      </Label>
      <input type="file" id={label} onChange={(e) => onChange(e, name)} />
      {imageName && <p>{imageName}</p>}
      {isError && <ErrorText>*Fill there</ErrorText>}
    </Wrapper>
  );
};

export default UploadFile;

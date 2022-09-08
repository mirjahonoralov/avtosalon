import React from "react";
import styled from "styled-components";
import camera from "../assets/icons/camera.svg";

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

const UploadFile = ({ label, placeholder }) => {
  return (
    <Wrapper>
      <p>{label}</p>
      <Label htmlFor={label}>
        <img src={camera} alt="" />
        <p>{placeholder}</p>
      </Label>
      <input type="file" id={label} />
    </Wrapper>
  );
};

export default UploadFile;

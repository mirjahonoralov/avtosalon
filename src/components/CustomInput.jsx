import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
    width: 100%;
    background: #f4f4f4;
    border-radius: 12px;
    height: 48px;
    padding-left: 12px;
    border: none;
    outline: none;
    font-size: 14px;
  }
  textarea {
    width: 100%;
    background: #f4f4f4;
    border-radius: 12px;
    padding: 12px;
    border: none;
    outline: none;
    font-size: 14px;
  }
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 13px;
`;

const CustomInput = ({
  label,
  placeholder,
  textArea,
  onInputChange,
  name,
  isError,
  type,
  data,
}) => {
  return (
    <div>
      <Wrapper>
        <p>{label}</p>
        {textArea ? (
          <textarea
            rows={7}
            onChange={(e) => onInputChange(e, name)}
            value={data[name]}
          />
        ) : (
          <input
            placeholder={placeholder}
            onChange={(e) => onInputChange(e, name)}
            type={type}
            value={data[name]}
          />
        )}
      </Wrapper>

      {isError && <ErrorText>*Fill there</ErrorText>}
    </div>
  );
};

export default CustomInput;

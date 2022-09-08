import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    width: 100%;
    background: #f4f4f4;
    border-radius: 12px;
    height: 48px;
    padding-left: 12px;
    border: none;
    outline: none;
    font-size: 14px;

    option {
      height: 25px !important;
      padding: 10px 0 !important;
    }
  }
`;

const CustomSelector = ({ label, value, onInputChange, items, type, name }) => {
  return (
    <Wrapper>
      <h5>{label}</h5>
      <select value={value} onChange={(e) => onInputChange(e, name)}>
        {items?.length &&
          items.map((item) => (
            <option
              key={item.name || item}
              value={type === "second" ? item : item._id}
            >
              {item.name || item}
            </option>
          ))}
      </select>
    </Wrapper>
  );
};

export default CustomSelector;

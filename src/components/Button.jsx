import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
`;

const Wrapper = styled.div`
  padding: 12px 30px;
  background: #2a85ff;
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Wrapper>{text}</Wrapper>
    </Container>
  );
};

export default Button;

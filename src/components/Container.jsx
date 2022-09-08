import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 82px 94px;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

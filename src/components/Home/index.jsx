import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
// import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Navbar />
      {/* <Content /> */}
    </Wrapper>
  );
};

export default Home;

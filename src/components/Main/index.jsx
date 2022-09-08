import React, { useState } from "react";
import Container from "../Container";
import { BreadCrumbs, Crumb } from "./style";
import right from "../../assets/icons/right.svg";
import Models from "../Models";
import CarTypes from "./CarTypes";
import { Routes, Route } from "react-router-dom";
import Model from "./Model";

const Main = () => {
  const [crumbs, setCrumbs] = useState(["Bosh sahifa", "Modellari"]);

  const handleCrumbClick = (id) => {
    const filteredCrumbs = crumbs.slice(0, id + 1);
    setCrumbs(filteredCrumbs);
  };

  return (
    <Container>
      <BreadCrumbs>
        {crumbs.map((item, id) => {
          return (
            <Crumb key={item} onClick={() => handleCrumbClick(id)}>
              {item}
              {id !== crumbs.length - 1 && <img src={right} alt="" />}
            </Crumb>
          );
        })}
      </BreadCrumbs>
      <Routes>
        <Route
          exact
          path="/models"
          element={<Models setCrumbs={setCrumbs} crumbs={crumbs} />}
        />
        <Route
          exact
          path="/models/types"
          element={<CarTypes setCrumbs={setCrumbs} crumbs={crumbs} />}
        />
        <Route exact path="/models/types/:id" element={<Model />} />
      </Routes>

      {/* {crumbs.length === 2 && <Models setCrumbs={setCrumbs} crumbs={crumbs} />}
      {crumbs.length === 3 && (
        <CarTypes setCrumbs={setCrumbs} crumbs={crumbs} />
      )} */}
    </Container>
  );
};

export default Main;

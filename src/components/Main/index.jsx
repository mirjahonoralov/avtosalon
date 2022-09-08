import React, { useEffect, useState } from "react";
import Container from "../Container";
import { BreadCrumbs, Button, Crumb, MainTop } from "./style";
import right from "../../assets/icons/right.svg";
import person from "../../assets/icons/person.svg";
import CarTypes from "./CarTypes";
import { Routes, Route, useParams } from "react-router-dom";
import Model from "./Model";
import { useNavigate } from "react-router-dom";
import Models from "./Models";

const Main = () => {
  const [crumbs, setCrumbs] = useState(["Bosh sahifa", "Modellari"]);
  const navigate = useNavigate();
  const params = useParams();

  const handleCrumbClick = (id) => {
    const filteredCrumbs = crumbs.slice(0, id + 1);
    setCrumbs(filteredCrumbs);
  };

  useEffect(() => {
    if (crumbs.length === 1) navigate("/main");
    if (crumbs.length === 2) navigate("/main/models");
    if (!params.id && crumbs.length === 3) navigate("/main/models/types");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crumbs, params.id]);

  return (
    <Container>
      <MainTop>
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
        <Button onClick={() => navigate("/main")}>
          <img src={person} alt="" /> Admin o‘tish
        </Button>
      </MainTop>

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
    </Container>
  );
};

export default Main;

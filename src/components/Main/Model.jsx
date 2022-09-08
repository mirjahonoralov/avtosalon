import React, { useEffect, useState } from "react";
import {
  Bottom,
  ImgWrapper,
  ModelLeft,
  ModelRight,
  ModelWrapper,
  RightTop,
  Selection,
  Wrapper360,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncCar } from "../../store/slices/carSlice";
import frame from "../../assets/icons/modelFrame.svg";
import home from "../../assets/icons/modelHome.svg";
import deg360 from "../../assets/icons/360.svg";

const Model = () => {
  const car = useSelector((state) => state.carSlice.selectedCar);
  const [side, setSide] = useState("outside");
  const params = useParams();

  const dispatch = useDispatch();

  const handleChange = (e) => setSide(e.target.value);

  useEffect(() => {
    if (params.id) dispatch(fetchAsyncCar(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (car.data) {
    var {
      color,
      description,
      distance,
      imgUrl,
      imgUrlAutside,
      // imgUrlInside,
      gearbok,
      marka,
      motor,
      price,
      tonirovka,
      year,
      // _id,
    } = car?.data;
  }

  if (car?.data)
    return (
      <ModelWrapper>
        <ModelLeft>
          <h2>{marka.name.toUpperCase()}</h2>
          <p>{price} so'm dan</p>
          <img src={`https://cartestwebapp.herokuapp.com/${imgUrl}`} alt="" />
          <p>
            Marka: <span>{marka.name}</span>
          </p>
          <p>
            Tanirovka: <span>{tonirovka}</span>
          </p>
          <p>
            Motor: <span>{motor}</span>
          </p>
          <p>
            Year: <span>{year}</span>
          </p>
          <p>
            Color: <span>{color}</span>
          </p>
          <p>
            Distance: <span>{distance}</span>
          </p>
          <p>
            Gearbok: <span>{gearbok}</span>
          </p>
          <p>
            Description: <span>{description}</span>
          </p>
          <Bottom>
            <p style={{ textAlign: "end" }}>
              Umumiy xarajat: <span>{price}</span>
            </p>
          </Bottom>
        </ModelLeft>

        <ModelRight>
          <RightTop>
            <h2>{marka.name.toUpperCase()}</h2>
            <div>
              <img src={frame} alt="" />
              <img src={home} alt="" />
            </div>
          </RightTop>
          <ImgWrapper>
            {side === "outside" && (
              <img
                src={`https://cartestwebapp.herokuapp.com/${imgUrlAutside}`}
                alt=""
              />
            )}
            {side === "inside" && (
              // eslint-disable-next-line jsx-a11y/iframe-has-title
              <iframe
                src="https://momento360.com/e/u/577e4483b1254dc786f66edd4fd3d397?utm_campaign=embed&utm_source=other&heading=-200.37&pitch=-15.67&field-of-view=75&size=medium"
                frameborder="0"
              ></iframe>
            )}
          </ImgWrapper>

          <Wrapper360>
            <img src={deg360} alt="" />
          </Wrapper360>
          <p style={{ padding: "0 30px" }}>
            Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
            rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
          </p>
          <Selection onChange={handleChange} value={side}>
            <div>
              <input
                type="radio"
                id="outside"
                value={"outside"}
                name="type"
                checked={side === "outside"}
              />
              <label for="outside">Tashqi</label>
            </div>
            <div>
              <input type="radio" id="inside" value={"inside"} name="type" />
              <label for="inside">Ichki</label>
            </div>
          </Selection>
        </ModelRight>
      </ModelWrapper>
    );
};

export default Model;

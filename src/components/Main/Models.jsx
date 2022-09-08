import React, { useEffect } from "react";
import {
  fetchAsyncCarsByCategory,
  fetchAsyncCategory,
} from "../../store/slices/carSlice";
import { CardWrapper, ImgWrapper, Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Models = ({ setCrumbs, crumbs }) => {
  const categories = useSelector((state) => state.carSlice.categories);
  const navigate = useNavigate();

  const handleClick = (name, id) => {
    setCrumbs([...crumbs, `${name} turlari`]);
    dispatch(fetchAsyncCarsByCategory(id));
    navigate(`/main/models/types`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCategory());
  }, [dispatch]);

  return (
    <>
      <div className="title">Modellari</div>
      <Wrapper>
        {categories?.data?.map(({ name, imgUrl, _id }, index) => (
          <CardWrapper key={_id} onClick={() => handleClick(name, _id)}>
            <ImgWrapper>
              <img
                src={`https://cartestwebapp.herokuapp.com/${imgUrl}`}
                alt=""
              />
            </ImgWrapper>
            <p>{name}</p>
          </CardWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default Models;

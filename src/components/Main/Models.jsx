import React, { useEffect, useState } from "react";
import {
  fetchAsyncCarsByCategory,
  fetchAsyncCategory,
} from "../../store/slices/carSlice";
import { CardWrapper, ImgWrapper, PaginationWrapper, Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

const Models = ({ setCrumbs, crumbs }) => {
  const categories = useSelector((state) => state.carSlice.categories);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  console.log(categories);

  const handleClick = (name, id) => {
    setCrumbs([...crumbs, `${name} turlari`]);
    dispatch(fetchAsyncCarsByCategory(id));
    navigate(`/main/models/types`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCategory(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (categories.data?.length) dispatch(fetchAsyncCategory(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
      <PaginationWrapper>
        <Pagination total={categories?.total} page={page} setPage={setPage} />
      </PaginationWrapper>
    </>
  );
};

export default Models;

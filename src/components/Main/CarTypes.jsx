import React, { useEffect, useState } from "react";
import {
  CarTypeCard,
  CarTypesWrapper,
  ImgWrapper2,
  PaginationWrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/images/no image.png";
import Pagination from "../Pagination";
import { fetchAsyncCarsByCategory } from "../../store/slices/carSlice";

const CarTypes = () => {
  const { carTypes } = useSelector((state) => state.carSlice);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => navigate(`/main/models/types/${id}`);

  useEffect(() => {
    if (carTypes.categoryId)
      dispatch(
        fetchAsyncCarsByCategory({
          id: carTypes.categoryId,
          page,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!(carTypes.data.data?.length > 0))
    return <h2 style={{ marginTop: "30px" }}>Cars not found</h2>;

  return (
    <>
      <CarTypesWrapper>
        {carTypes?.data?.data?.map((item) => (
          <CarTypeCard key={item._id} onClick={() => handleClick(item._id)}>
            <ImgWrapper2>
              <img
                src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                alt=""
              />
              <img src={noImage} alt="" />
            </ImgWrapper2>
            <div>
              <p>{item?.marka?.name.toUpperCase()}</p>
              <p>Narxi: {item.price}</p>
            </div>
          </CarTypeCard>
        ))}
      </CarTypesWrapper>
      <PaginationWrapper>
        <Pagination
          total={carTypes?.data?.total}
          page={page}
          setPage={setPage}
        />
      </PaginationWrapper>
    </>
  );
};

export default CarTypes;

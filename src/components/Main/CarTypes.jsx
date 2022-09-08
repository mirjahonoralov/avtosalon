import React from "react";
import { CarTypeCard, CarTypesWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CarTypes = () => {
  const carTypes = useSelector((state) => state.carSlice.carTypes);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/main/models/types/${id}`);
  };

  return (
    <CarTypesWrapper>
      {carTypes?.data?.map((item) => (
        <CarTypeCard key={item._id} onClick={() => handleClick(item._id)}>
          <img
            src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
            alt=""
          />
          <div>
            <p>{item.marka.name.toUpperCase()}</p>
            <p>Narxi: {item.price}</p>
          </div>
        </CarTypeCard>
      ))}
    </CarTypesWrapper>
  );
};

export default CarTypes;

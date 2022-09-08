import React from "react";
import { CarTypeCard, CarTypesWrapper, ImgWrapper2 } from "./style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/images/no image.png";

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
          <ImgWrapper2>
            {item.imgUrl ? (
              <img
                src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`}
                alt=""
              />
            ) : (
              <img src={noImage} alt="" />
            )}
          </ImgWrapper2>
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

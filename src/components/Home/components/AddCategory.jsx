import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncCategory } from "../../../store/slices/carSlice";
import CustomInput from "../../CustomInput";
import Loading from "../../Loading";
import UploadFile from "../../UploadFile";
import { Button, ModalContent } from "./style";

const AddCategory = ({ handleClose }) => {
  const responsePostCategory = useSelector(
    (state) => state.carSlice.responsePostCategory
  );
  const { pending, success } = responsePostCategory;
  const [categoryData, setCategoryData] = useState({
    name: "",
    imgUrl: "img-a463268af6f271bc3adac0871d505b4a.jpg",
  });

  const onInputChange = (e, name) => {
    setCategoryData({ ...categoryData, [name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleClick = () => dispatch(postAsyncCategory(categoryData));

  useEffect(() => {
    if (success) handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <>
      <ModalContent>
        <CustomInput
          label="Markasi"
          placeholder="Kiriting"
          onInputChange={onInputChange}
          name="name"
        />
        <UploadFile label="Rasm tashqi makon" placeholder="Yuklash" />
      </ModalContent>
      <div style={{ marginLeft: "auto" }}>
        <Button onClick={handleClick}>
          {pending && <Loading />}
          Saqlash
        </Button>
      </div>
    </>
  );
};

export default AddCategory;

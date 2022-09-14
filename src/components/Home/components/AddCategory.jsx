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
    imgUrl: "",
  });
  const [imageUploading, setImageUploading] = useState(false);
  const [imageName, setImageName] = useState(null);
  const [error, setError] = useState(false);

  const onInputChange = (e, name) => {
    setCategoryData({ ...categoryData, [name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!categoryData.imgUrl || !categoryData.name) setError(true);
    else dispatch(postAsyncCategory(categoryData));
  };

  const onUpload = async (e, name) => {
    setImageName(e.target.files[0].name);
    let image = new FormData();
    image.append("file", e.target.files[0]);
    image.append("name", "my image");
    image.append("type", "img");

    setImageUploading(true);
    const res = await fetch("https://cartestwebapp.herokuapp.com/upload", {
      method: "POST",
      body: image,
      headers: {
        Authorization: `bearer ${localStorage.getItem("employeeToken")}`,
      },
    });
    const resImage = await res.json();
    setImageUploading(false);

    setCategoryData({ ...categoryData, imgUrl: resImage?.data });
  };

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
          isError={error && !categoryData.name}
        />
        <UploadFile
          label="Rasm tashqi makon"
          placeholder="Yuklash"
          name="imgUrl"
          onChange={onUpload}
          uploading={imageUploading && !categoryData.imgUrl}
          imageName={categoryData.imgUrl && imageName}
          isError={error && !categoryData.imgUrl}
        />
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

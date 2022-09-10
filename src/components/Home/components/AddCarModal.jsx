import React, { useEffect, useState } from "react";
import CustomInput from "../../CustomInput";
import { Button, ModalContent } from "./style";
import CustomSelector from "../../CustomSelector";
import UploadFile from "../../UploadFile";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncCar } from "../../../store/slices/carSlice";
import Loading from "../../Loading";

const AddCar = ({ handleClose }) => {
  const categories = useSelector((state) => state.carSlice.categories);
  const [categoryList, setCategoryList] = useState([]);
  const items = ["Bor", "Yo'q"];
  const dispatch = useDispatch();
  const [data, setData] = useState({
    imgUrl: "img-a463268af6f271bc3adac0871d505b4a.jpg",
    imgUrlInside: "img-db607b3fdb99095051f37c849887ace7.jpg",
    imgUrlAutside: "img-a463268af6f271bc3adac0871d505b4a.jpg",
    price: 122000000,
    year: 2020,
    description: "avtomobil holati yaxshi",
    tonirovka: " oldi orqa qilingan",
    motor: "holati yaxshi ",
    color: "rangi oq zavatiskoy",
    distance: "11000",
    gearbok: "avtomat",
    categoryId: "63180c53d0953487569045c7",
  });

  const onInputChange = (e, name) =>
    setData({ ...data, [name]: e.target.value });

  useEffect(() => {
    setCategoryList(categories.data);
    // setDefaultCategory(categories.defaultCategory);
  }, [categories]);

  useEffect(() => {
    setData({
      ...data,
      categoryId: categoryList?.[0]?._id,
      tonirovka: items[0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  const responsePostCar = useSelector(
    (state) => state.carSlice.responsePostCar
  );
  const { pending, success } = responsePostCar;

  useEffect(() => {
    if (success) handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <>
      <ModalContent>
        <CustomSelector
          items={categoryList}
          value={data?.categoryId}
          label="Markasi"
          onInputChange={onInputChange}
          name="categoryId"
        />
        <CustomSelector
          items={items}
          value={data.tonirovka}
          label="Tanirovkasi"
          onInputChange={onInputChange}
          type="second"
          name="tonirovka"
        />
        <CustomInput
          name="motor"
          data={data}
          onInputChange={onInputChange}
          label="Motor"
          placeholder="Kiriting"
        />
        <CustomInput
          name="year"
          data={data}
          onInputChange={onInputChange}
          label="Year"
          placeholder="Kiriting"
        />
        <CustomInput
          name="color"
          data={data}
          onInputChange={onInputChange}
          label="Color"
          placeholder="Kiriting"
        />
        <CustomInput
          name="distance"
          data={data}
          onInputChange={onInputChange}
          label="Distance"
          placeholder="Kiriting"
        />
        <CustomInput
          name="gearbok"
          data={data}
          onInputChange={onInputChange}
          label="Gearbok"
          placeholder="Kiriting"
        />
        <CustomInput
          name="price"
          data={data}
          onInputChange={onInputChange}
          label="Narxi"
          placeholder="Kiriting"
        />
        <UploadFile label="Rasm 360 ichki makon" placeholder="Yuklash" />
        <UploadFile label="Rasm 360 tashqi makon" placeholder="Yuklash" />
        <CustomInput
          name="description"
          data={data}
          onInputChange={onInputChange}
          label="Description"
          placeholder="Mazmuni kiriting"
          textArea={true}
        />
        <UploadFile label="Modeli turi uchun rasm" placeholder="Yuklash" />
      </ModalContent>
      <div style={{ marginLeft: "auto" }}>
        <Button onClick={() => dispatch(postAsyncCar(data))}>
          {pending && <Loading />}
          Saqlash
        </Button>
      </div>
    </>
  );
};

export default AddCar;

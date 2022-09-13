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
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    imgUrl: "no",
    imgUrlInside: "no",
    imgUrlAutside: "no",
    price: null,
    year: null,
    description: "",
    tonirovka: "",
    motor: "",
    color: "",
    distance: "",
    gearbok: "",
    categoryId: "",
  });

  const onInputChange = (e, name) => {
    if (name === "price" || name === "year")
      setData({ ...data, [name]: Number(e.target.value) });
    else setData({ ...data, [name]: e.target.value });
  };

  console.log(data, "data");

  const responsePostCar = useSelector(
    (state) => state.carSlice.responsePostCar
  );
  const { pending, success } = responsePostCar;

  useEffect(() => {
    if (success) handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

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

  const onSubmit = () => {
    if (
      data.color &&
      data.description &&
      data.distance &&
      data.gearbok &&
      data.motor &&
      data.price &&
      data.year &&
      data.tonirovka
    )
      dispatch(postAsyncCar(data));
    else setError(true);
  };

  return (
    <>
      <ModalContent>
        <CustomSelector
          items={categoryList}
          value={data?.categoryId}
          label="Markasi"
          onInputChange={onInputChange}
          name="categoryId"
          // isError={!data.categoryId && error}
        />
        <CustomSelector
          items={items}
          value={data.tonirovka}
          label="Tanirovkasi"
          onInputChange={onInputChange}
          type="second"
          name="tonirovka"
          // isError={!data.tonirovka && error}
        />
        <CustomInput
          name="motor"
          data={data}
          onInputChange={onInputChange}
          label="Motor"
          placeholder="Kiriting"
          isError={!data.motor && error}
        />
        <CustomInput
          name="year"
          data={data}
          onInputChange={onInputChange}
          label="Year"
          placeholder="Kiriting"
          isError={!data.year && error}
        />
        <CustomInput
          name="color"
          data={data}
          onInputChange={onInputChange}
          label="Color"
          placeholder="Kiriting"
          isError={!data.color && error}
        />
        <CustomInput
          name="distance"
          data={data}
          onInputChange={onInputChange}
          label="Distance"
          placeholder="Kiriting"
          isError={!data.distance && error}
        />
        <CustomInput
          name="gearbok"
          data={data}
          onInputChange={onInputChange}
          label="Gearbok"
          placeholder="Kiriting"
          isError={!data.gearbok && error}
        />
        <CustomInput
          name="price"
          data={data}
          onInputChange={onInputChange}
          label="Narxi"
          placeholder="Kiriting"
          isError={!data.price && error}
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
          isError={!data.description && error}
        />
        <UploadFile label="Modeli turi uchun rasm" placeholder="Yuklash" />
      </ModalContent>
      <div style={{ marginLeft: "auto" }}>
        <Button onClick={onSubmit}>
          {pending && <Loading />}
          Saqlash
        </Button>
      </div>
    </>
  );
};

export default AddCar;

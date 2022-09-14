import React, { useEffect, useState } from "react";
import CustomInput from "../../CustomInput";
import { Button, ModalContent } from "./style";
import CustomSelector from "../../CustomSelector";
import UploadFile from "../../UploadFile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCar,
  postAsyncCar,
  postAsyncEditedCar,
} from "../../../store/slices/carSlice";
import Loading from "../../Loading";

const AddCar = ({ handleClose, carId }) => {
  const categories = useSelector((state) => state.carSlice.categories);
  const selectedCar = useSelector((state) => state.carSlice.selectedCar);
  const [categoryList, setCategoryList] = useState([]);
  const items = ["Bor", "Yo'q"];
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [images, setImages] = useState({
    imgUrl: "",
    imgUrlInside: "",
    imgUrlAutside: "",
  });
  const [imageUploading, setImageUploading] = useState(false);
  const [data, setData] = useState({
    imgUrl: "",
    imgUrlInside: "",
    imgUrlAutside: "",
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

  const onUpload = async (e, name) => {
    for (let key in images) {
      if (key === name)
        setImages({
          ...images,
          [name]: e.target.files[0].name,
        });
    }

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

    setData({ ...data, [name]: resImage?.data });
  };

  const responsePostCar = useSelector(
    (state) => state.carSlice.responsePostCar
  );
  const { pending, success } = responsePostCar;

  useEffect(() => {
    console.log(success);
    if (success) handleClose();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    setCategoryList(categories.data);
    // setDefaultCategory(categories.defaultCategory);
  }, [categories]);

  useEffect(() => {
    if (!carId)
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
    ) {
      if (carId) dispatch(postAsyncEditedCar(data));
      else dispatch(postAsyncCar(data));
    } else setError(true);
  };

  useEffect(() => {
    if (carId) {
      dispatch(fetchAsyncCar(carId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCar?.data) {
      console.log(selectedCar, "selectedCar");

      setData(selectedCar.data);
    }
  }, [selectedCar]);

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
        <UploadFile
          label="Rasm 360 ichki makon"
          placeholder="Yuklash"
          onChange={onUpload}
          name="imgUrlInside"
          uploading={imageUploading && !data.imgUrlInside}
          imageName={data.imgUrlInside && images.imgUrlInside}
        />
        <UploadFile
          label="Rasm 360 tashqi makon"
          placeholder="Yuklash"
          name="imgUrlAutside"
          onChange={onUpload}
          uploading={imageUploading && !data.imgUrlAutside}
          imageName={data.imgUrlAutside && images.imgUrlAutside}
        />
        <CustomInput
          name="description"
          data={data}
          onInputChange={onInputChange}
          label="Description"
          placeholder="Mazmuni kiriting"
          textArea={true}
          isError={!data.description && error}
        />
        <UploadFile
          label="Modeli turi uchun rasm"
          placeholder="Yuklash"
          name="imgUrl"
          onChange={onUpload}
          uploading={imageUploading && !data.imgUrl}
          imageName={data.imgUrl && images.imgUrl}
        />
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

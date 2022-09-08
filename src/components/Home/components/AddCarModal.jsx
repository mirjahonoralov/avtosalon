import React, { useEffect, useState } from "react";
import CustomInput from "../../CustomInput";
import {
  Button,
  Modal,
  ModalBg,
  ModalContent,
  Top,
  TopItem,
  TopLeft,
} from "./style";
import closeIcon from "../../../assets/icons/close.svg";
import CustomSelector from "../../CustomSelector";
import UploadFile from "../../UploadFile";
import { useDispatch, useSelector } from "react-redux";
import { postCar } from "../../../store/slices/carSlice";

const AddCarModal = ({ open, handleClose }) => {
  const categories = useSelector((state) => state.carSlice.categories);
  const { defaultCategory, data: categoriesList } = categories;
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

  const onInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  useEffect(() => {
    setData({ ...data, categoryId: defaultCategory, tonirovka: items[0] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCategory]);

  if (open)
    return (
      <>
        <ModalBg />
        <Modal>
          <Top>
            <TopLeft>
              <TopItem color="#CABDFF" />
              <h5>Mashina qo’shish</h5>
            </TopLeft>
            <img src={closeIcon} alt="" onClick={handleClose} />
          </Top>
          <ModalContent>
            <CustomSelector
              items={categoriesList}
              value={data?.categoryId ? data?.categoryId : defaultCategory}
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
            <Button onClick={() => dispatch(postCar(data))}>Saqlash</Button>
          </div>
        </Modal>
      </>
    );
};

export default AddCarModal;

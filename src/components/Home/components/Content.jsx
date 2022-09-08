import React, { useEffect, useState } from "react";
import {
  Button,
  Buttons,
  ContentComponent,
  ContentWrapper,
  Table,
  Top,
  TopItem,
  TopLeft,
} from "../style";
import AddCarModal from "./AddCarModal";
import { useDispatch, useSelector } from "react-redux";
import plusIcon from "../../../assets/icons/plus.svg";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";
import { fetchAsyncAllCar } from "../../../store/slices/carSlice";
import Pagination from "./Pagination";

const Content = () => {
  const categories = useSelector((state) => state.carSlice.categories);
  const allCars = useSelector((state) => state.carSlice.allCars);
  console.log(allCars, "allCars");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleAddCar = () => {
    // dispatch(fetchAsyncCategory());
    setOpen(true);
  };

  useEffect(() => {
    if (categories.data?.length) {
      dispatch(fetchAsyncAllCar(categories.data[0]._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentWrapper>
      <ContentComponent>
        <Top>
          <TopLeft>
            <TopItem color="#ffd88d" />
            <h5>Mashinalar</h5>
          </TopLeft>

          <Buttons>
            <Button onClick={() => setOpen(true)}>
              <img src={plusIcon} alt="" /> Kategoriya qo’shish
            </Button>
            <Button onClick={() => handleAddCar()}>
              <img src={plusIcon} alt="" /> Mashina qo‘shish
            </Button>
          </Buttons>
          <AddCarModal open={open} handleClose={handleClose} />
        </Top>
        <Table>
          <thead>
            <th>#</th>
            <th>Markasi</th>
            <th>Gearbook</th>
            <th>Tanirovkasi</th>
            <th>Motor</th>
            <th>Year</th>
            <th>Color</th>
            <th>Distance</th>
            <th></th>
          </thead>
          <tbody>
            {allCars.data?.map(
              (
                {
                  color,
                  description,
                  distance,
                  imgUrl,
                  imgUrlAutside,
                  imgUrlInside,
                  gearbok,
                  marka,
                  motor,
                  price,
                  tonirovka,
                  year,
                  _id,
                },
                index
              ) => (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>{marka.name}</td>
                  <td>{gearbok}</td>
                  <td>{tonirovka}</td>
                  <td>{motor}</td>
                  <td>{year}</td>
                  <td>{color}</td>
                  <td>{distance}</td>
                  <td>
                    <img src={arrowRightIcon} alt="" />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <Pagination total={allCars?.total} />
      </ContentComponent>
    </ContentWrapper>
  );
};

export default Content;

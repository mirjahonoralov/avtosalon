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
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import plusIcon from "../../../assets/icons/plus.svg";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";
import {
  fetchAsyncAllCarByPage,
  fetchAsyncCategory,
  restartPostCategoryStatus,
  restartPostStatus,
} from "../../../store/slices/carSlice";
import ModalTemplate from "../../ModalTemplate";
import AddCategory from "./AddCategory";
import AddCar from "./AddCarModal";
import Pagination from "../../Pagination";

const Content = () => {
  const allCars = useSelector((state) => state.carSlice.allCars);
  const [carModalOpen, setCarModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleCloseCarModal = () => setCarModalOpen(false);
  const handleCloseCategoryModal = () => setCategoryModalOpen(false);
  const dispatch = useDispatch();

  const handleAddCar = () => {
    setCarModalOpen(true);
    dispatch(fetchAsyncCategory(1));
  };

  const handleAddCategory = () => {
    dispatch(fetchAsyncCategory(1));
    setCategoryModalOpen(true);
  };

  const responsePostCar = useSelector(
    (state) => state.carSlice.responsePostCar
  );
  const { success } = responsePostCar;

  const responsePostCategory = useSelector(
    (state) => state.carSlice.responsePostCategory
  );
  const { success: categorySuccess } = responsePostCategory;

  useEffect(() => {
    dispatch(fetchAsyncAllCarByPage(page));
    if (success) dispatch(restartPostStatus());
    if (categorySuccess) dispatch(restartPostCategoryStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, success, categorySuccess]);

  return (
    <ContentWrapper>
      <ContentComponent>
        <Top>
          <TopLeft>
            <TopItem color="#ffd88d" />
            <h5>Mashinalar</h5>
          </TopLeft>

          <Buttons>
            <Button onClick={handleAddCategory}>
              <img src={plusIcon} alt="" /> Kategoriya qo’shish
            </Button>
            <Button onClick={handleAddCar}>
              <img src={plusIcon} alt="" /> Mashina qo‘shish
            </Button>
          </Buttons>

          <ModalTemplate
            isHuge={true}
            open={carModalOpen}
            handleClose={handleCloseCarModal}
          >
            <AddCar handleClose={handleCloseCarModal} />
          </ModalTemplate>

          <ModalTemplate
            open={categoryModalOpen}
            handleClose={handleCloseCategoryModal}
          >
            <AddCategory handleClose={handleCloseCategoryModal} />
          </ModalTemplate>
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
                  <td>{(page - 1) * 5 + index + 1}</td>
                  <td>{marka?.name}</td>
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
        <Pagination total={allCars?.total} setPage={setPage} page={page} />
      </ContentComponent>
    </ContentWrapper>
  );
};

export default Content;

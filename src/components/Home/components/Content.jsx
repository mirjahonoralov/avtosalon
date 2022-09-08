import { Add, ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table, TopItem } from "../Style";
import AddCarModal from "./AddCarModal";
import { useDispatch } from "react-redux";
import { fetchAsyncCarsData } from "../../../store/slices/carSlice";

const Content = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCarsData());
  }, [dispatch]);

  return (
    <Box bgcolor={"#E3E3E3"} width="100%" flex={5} p={3} height={"100vh"}>
      <Box
        bgcolor={"#fcfcfc"}
        borderRadius="8px"
        p={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        gap="30px"
      >
        <Box display={"flex"} width="100%" justifyContent="space-between">
          <Box display={"flex"} gap="16px">
            <TopItem color="#ffd88d" />
            <Typography variant="h5" fontWeight={700}>
              Mashinalar
            </Typography>
          </Box>

          <Button
            color="primary"
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpen(true)}
          >
            Mashina qo‘shish
          </Button>
          <AddCarModal open={open} handleClose={handleClose} />
        </Box>
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
            {items.map((item) => (
              <tr key={item}>
                <td>1.</td>
                <td>CHEVROLET</td>
                <td>Avtomat karobka</td>
                <td>Yoq</td>
                <td>1.6</td>
                <td>2016</td>
                <td>Oq</td>
                <td>3000km</td>
                <td>
                  <ArrowForwardOutlined />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination count={10} />
      </Box>
    </Box>
  );
};

export default Content;

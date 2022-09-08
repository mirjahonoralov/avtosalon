import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAsyncAllCar = createAsyncThunk(
  // fetch all car/byId, but there is not API to get all cars
  "cars/fetchAsyncAllCar",
  async (id) => {
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=1&categoryId=${id}`
    );
    const data = await res.json();
    return data.data;
  }
);

export const fetchAsyncCar = createAsyncThunk(
  "cars/fetchAsyncCar",
  async (id) => {
    const res = await fetch(`https://cartestwebapp.herokuapp.com/car/${id}`);
    const data = await res.json();
    return data.data;
  }
);

export const fetchAsyncCategory = createAsyncThunk(
  "cars/fetchAsyncCategory",
  async () => {
    console.log("start fetchAsyncCategory");
    const res = await fetch(
      "https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=1"
    );
    const data = await res.json();
    return data.data;
  }
);

export const fetchAsyncCarsByCategory = createAsyncThunk(
  "cars/fetchAsyncCarsByCategory",
  async (id) => {
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=1&categoryId=${id}`
    );
    const data = await res.json();
    return data.data;
  }
);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU";

export const postCar = async (data) => {
  const res = await fetch("https://cartestwebapp.herokuapp.com/car", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },

    body: JSON.stringify(data),
  });
  console.log(res);
};

const initialState = {
  allCars: [],
  categories: {
    received: false,
    data: null,
    defaultCategory: null,
  },
  carTypes: [],
  selectedCar: {
    pending: false,
    data: null,
  },
  pending: false,
};

export const carSlice = createSlice({
  initialState,
  name: "cars",
  reducers: {},
  extraReducers: {
    [fetchAsyncCategory.pending]: () => {},
    [fetchAsyncCategory.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.received = true;
      state.categories.data = payload.data;
      state.categories.defaultCategory = payload.data[0]._id;
    },

    [fetchAsyncCarsByCategory.pending]: () => {},
    [fetchAsyncCarsByCategory.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.carTypes = payload;
    },

    [fetchAsyncAllCar.pending]: () => {},
    [fetchAsyncAllCar.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.allCars = payload;
    },

    [fetchAsyncCar.pending]: (state) => {
      state.selectedCar.pending = true;
    },
    [fetchAsyncCar.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.selectedCar.data = payload;
      state.selectedCar.pending = false;
    },
  },
});

export default carSlice.reducer;

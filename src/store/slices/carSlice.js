import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAsyncCar = createAsyncThunk(
  "cars/fetchAsyncCar",
  async (id) => {
    console.log("start");
    const res = await fetch(`https://cartestwebapp.herokuapp.com/car/${id}`);
    const data = await res.json();
    console.log(data, "data");
    return data.data;
  }
);

// export const fetchAsyncCarById = createAsyncThunk(
//   "car/fetchAsyncCarById",
//   async () => {
//     console.log("start by id");
//     // const res = await fetch(`https://cartestwebapp.herokuapp.com/car/${id}`);
//     // const data = await res.json();
//     // console.log(data, "data");
//     // return data.data;
//   }
// );

// export const fetchAsyncGetCarById = createAsyncThunk(
//   "car/fetchAsyncCarById",
//   async () => {
//     console.log("start by id");
//     // const res = await fetch(`https://cartestwebapp.herokuapp.com/car/${id}`);
//     // const data = await res.json();
//     // console.log(data, "data");
//     // return data.data;
//   }
// );

export const fetchAsyncCategory = createAsyncThunk(
  "cars/fetchAsyncCategory",
  async () => {
    console.log("start fetchAsyncCategory");
    const res = await fetch(
      "https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=1"
    );
    const data = await res.json();
    console.log(data, "data");
    return data.data;
  }
);

export const fetchAsyncCarsByCategory = createAsyncThunk(
  "cars/fetchAsyncCarsByCategory",
  async (id) => {
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=1&categoryId=63180c53d0953487569045c7`
      // `https://cartestwebapp.herokuapp.com/car?limit=5&page=1&categoryId=${id}`
    );
    const data = await res.json();
    console.log(data, "data");
    return data.data;
  }
);

const initialState = {
  carData: [],
  categories: [],
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
    // [fetchAsyncCarsData.pending]: () => {},
    // [fetchAsyncCarsData.fulfilled]: (state, { payload }) => {
    //   console.log(payload, "payload");
    // },

    [fetchAsyncCategory.pending]: () => {},
    [fetchAsyncCategory.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.categories = payload;
    },

    [fetchAsyncCarsByCategory.pending]: () => {},
    [fetchAsyncCarsByCategory.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.carTypes = payload;
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

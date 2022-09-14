import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAsyncAllCarByPage = createAsyncThunk(
  "cars/fetchAsyncAllCarByPage",
  async (pageNum) => {
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=${pageNum}`
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
  async (page) => {
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=${page}`
    );
    const data = await res.json();
    return data.data;
  }
);

export const fetchAsyncCarsByCategory = createAsyncThunk(
  "cars/fetchAsyncCarsByCategory",
  async ({ id, page }) => {
    console.log({ id, page }, "{ id, page }");
    const res = await fetch(
      `https://cartestwebapp.herokuapp.com/car?limit=5&page=${page}&categoryId=${id}`
    );
    const data = await res.json();
    return { data: data.data, id };
  }
);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU";

export const postAsyncCar = createAsyncThunk(
  "cars/postAsyncCar",
  async (data) => {
    const res = await fetch("https://cartestwebapp.herokuapp.com/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },

      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log(resData);
  }
);

export const postAsyncCategory = createAsyncThunk(
  "cars/postAsyncCategory",
  async (data) => {
    const res = await fetch("https://cartestwebapp.herokuapp.com/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },

      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log(resData);
  }
);

const initialState = {
  allCars: [],
  categories: {
    received: false,
    data: null,
    defaultCategory: null,
    total: null,
  },
  carTypes: {
    data: [],
    categoryId: null,
  },
  selectedCar: {
    pending: false,
    data: null,
  },
  pending: false,
  responsePostCategory: {
    pending: false,
    success: false,
  },
  responsePostCar: {
    pending: false,
    success: false,
  },
};

export const carSlice = createSlice({
  initialState,
  name: "cars",
  reducers: {
    emptyCategoryId: (state) => {
      state.carTypes.categoryId = null;
    },
    restartPostStatus: (state) => {
      state.responsePostCar.success = false;
    },
    restartPostCategoryStatus: (state) => {
      state.responsePostCategory.success = false;
    },
  },
  extraReducers: {
    [fetchAsyncCategory.pending]: () => {},
    [fetchAsyncCategory.fulfilled]: (state, { payload }) => {
      state.received = true;
      state.categories.data = payload.data;
      state.categories.total = payload.total;
      state.categories.defaultCategory = payload.data[0]._id;
    },

    [fetchAsyncCarsByCategory.pending]: () => {},
    [fetchAsyncCarsByCategory.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload");
      state.carTypes.data = payload.data;
      state.carTypes.categoryId = payload.id;
    },

    [fetchAsyncAllCarByPage.pending]: () => {},
    [fetchAsyncAllCarByPage.fulfilled]: (state, { payload }) => {
      state.allCars = payload;
    },

    [fetchAsyncCar.pending]: (state) => {
      state.selectedCar.pending = true;
    },
    [fetchAsyncCar.fulfilled]: (state, { payload }) => {
      state.selectedCar.data = payload;
      state.selectedCar.pending = false;
    },

    [postAsyncCategory.pending]: (state) => {
      state.responsePostCategory.pending = true;
      state.responsePostCategory.success = false;
    },
    [postAsyncCategory.fulfilled]: (state, { payload }) => {
      state.responsePostCategory.pending = false;
      state.responsePostCategory.success = true;
    },

    [postAsyncCar.pending]: (state) => {
      state.responsePostCar.pending = true;
      state.responsePostCar.success = false;
    },
    [postAsyncCar.fulfilled]: (state, { payload }) => {
      state.responsePostCar.pending = false;
      state.responsePostCar.success = true;
    },
  },
});

export const { emptyCategoryId, restartPostStatus, restartPostCategoryStatus } =
  carSlice.actions;
export default carSlice.reducer;

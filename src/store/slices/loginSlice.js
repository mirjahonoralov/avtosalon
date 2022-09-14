import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU";

export const signUp = createAsyncThunk("employee/signUp", async (userData) => {
  const res = await fetch("https://cartestwebapp.herokuapp.com/employee", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
});

export const signIn = createAsyncThunk("employee/signIn", async (userData) => {
  try {
    const res = await fetch(
      "https://cartestwebapp.herokuapp.com/employee/login",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, "err");
  }
});

const initialState = {
  isSignUp: false,
  isSignIn: false,
  message: "",
  userId: "",
};

export const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.message = "";
    },
    [signUp.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload in signup");
      state.message = payload.data.message;
      state.isSignUp = payload.statusCode === 200 ? true : false;
    },

    [signIn.pending]: (state) => {
      state.message = "";
    },
    [signIn.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload in signIn");
      state.message = payload.data.message;
      state.isSignIn = payload.statusCode === 200 ? true : false;
      if (payload.data.token) {
        localStorage.setItem("employeeToken", payload.data.token);
        state.userId = payload.data._id;
      }
    },
    [signIn.rejected]: (state, { payload }) => {
      console.log(payload, "payload in reject");
    },
  },
});

export default loginSlice.reducer;

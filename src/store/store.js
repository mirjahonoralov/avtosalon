import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import loginSlice from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    carSlice,
    loginSlice,
  },
});

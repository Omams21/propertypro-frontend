import { configureStore } from "@reduxjs/toolkit";
// import { signupSlice } from './slice/signupslice';
import signupReducer from "./slice/signupslice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

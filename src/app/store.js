import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../slices/modalSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  }
})
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../slices/modalSlice";
import scrollPositionReducer from "../slices/scrollPositionSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    scrollPosition: scrollPositionReducer,
  }
})
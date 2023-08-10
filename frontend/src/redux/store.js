import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./allSlice";

export const store = configureStore({
  reducer: {
    all: allReducer,
  },
});

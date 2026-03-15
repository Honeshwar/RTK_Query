import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./ApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (prevMW) => prevMW().concat(apiSlice.middleware),
});

export default store;

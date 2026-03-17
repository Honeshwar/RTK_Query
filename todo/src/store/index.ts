import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./ApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (prevMW) => prevMW().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export default store;

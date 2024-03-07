import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../features/loader/loaderSlice";

const store = configureStore({
  reducer: { loading: loadingReducer },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import loading_reducer from "../features/loader/loaderSlice";
import reward_page_reducers from "../features/reward/rewardSlice";

const store = configureStore({
  reducer: {
    isLoading: loading_reducer,
    reward_page: reward_page_reducers,
  },
});

export default store;

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { promotionData } from "../../mockData/promotion/promotion";
import { setLoading } from "../loader/loaderSlice";
const initialState = {
  reward_info: {},
  error: "",
};

export const fetchRewards = createAsyncThunk(
  "reward_page",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      await new Promise((res) => setTimeout(() => res({}), 3000));
      dispatch(setLoading(false));
      return promotionData;
    } catch (error) {
      throw new Error("error message in fetching reward Data : ", error);
    }
  }
);

const selectedRewardInfo = (state) => state.reward_page.reward_info;

export const selectRewardInfoMemo = createSelector(
  [selectedRewardInfo],
  (reward_info) => {
    return { ...reward_info };
  }
);

const rewardSlice = createSlice({
  name: "reward_page",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRewards.fulfilled, (state, action) => {
        state.reward_info = action.payload;
      })
      .addCase(fetchRewards.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default rewardSlice.reducer;

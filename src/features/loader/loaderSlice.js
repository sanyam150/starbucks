import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isLoading: true,
};

// create slice
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// export reducers and action creators
export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

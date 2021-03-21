import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // value: 0
  },
  reducers: {
    list: (state, action) => {
      //state.value += action.payload;
    }
  }
});
export const { list /*,* decrement */ } = moviesSlice.actions;

export default moviesSlice.reducer;

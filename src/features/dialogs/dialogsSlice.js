import { createSlice } from "@reduxjs/toolkit";

export const dialogsSlice = createSlice({
  name: "dialogs",
  initialState: {
    isAddMovieDialogVisible: false
  },
  reducers: {
    dialogAddMovie: (state, action) => {
      state.isAddMovieDialogVisible = action.payload === "open";
    }
  }
});
export const { dialogAddMovie } = dialogsSlice.actions;

export const selectIsAddMovieDialogVisible = (state) =>
  state.dialogs.isAddMovieDialogVisible;

export default dialogsSlice.reducer;

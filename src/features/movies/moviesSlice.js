import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = [];

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&offset=0&limit=6"
  );
  const movies = response.json();
  return movies;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      console.log("action payload is ", action.payload);
      state.list = action.payload.data;
    }
  }
});
//export const { list } = moviesSlice.actions;

export default moviesSlice.reducer;

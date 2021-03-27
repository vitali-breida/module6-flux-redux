import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// selectors
export const selectSelectedMovie = (state) =>
  state.movies.list.find((el) => {
    return el.id === state.dialogs.selectedMovieId;
  });

export default moviesSlice.reducer;

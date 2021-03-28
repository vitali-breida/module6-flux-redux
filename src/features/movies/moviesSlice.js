import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    "http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&offset=0&limit=6"
  );
  const movies = response.json();
  return movies;
});

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async (payload) => {
    const response = await fetch("http://localhost:4000/movies", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const movie = response.json();
    return movie;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId) => {
    await fetch("http://localhost:4000/movies/" + movieId, {
      method: "DELETE"
    });
    return movieId;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.list = action.payload.data;
    },
    [editMovie.fulfilled]: (state, action) => {
      let index = state.list.findIndex((el) => {
        return el.id === action.payload.id;
      });
      state.list[index] = action.payload;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.list = state.list.filter((el) => {
        return el.id !== action.payload;
      });
    }
  }
});

// Returns selected movie from the state
export const selectSelectedMovie = (state) =>
  state.movies.list.find((el) => {
    return el.id === state.dialogs.selectedMovieId;
  });

// Returns edited movie from the state
export const selectEditedMovie = (state) =>
  state.movies.list.find((el) => {
    return el.id === state.dialogs.editedMovieId;
  });

export default moviesSlice.reducer;

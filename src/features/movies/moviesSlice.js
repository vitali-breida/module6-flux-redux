import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import store from "../../app/store";

//configuration
const serverUrl = "http://localhost:4000/movies";
const sortByDefault = "vote_average";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  let sortBy = store.getState().movies.sortBy;
  if (!sortBy) {
    sortBy = sortByDefault;
  }

  const response = await fetch(
    serverUrl + "?sortBy=" + sortBy + "&sortOrder=asc&offset=0&limit=6"
  );
  const movies = response.json();
  return movies;
});

export const addMovie = createAsyncThunk("movies/addMovie", async (payload) => {
  const response = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const json = await response.json();
  if (!!json.messages) {
    throw new Error(json.messages);
  } else return json;
});

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async (payload) => {
    const response = await fetch(serverUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const json = await response.json();
    if (!!json.messages) {
      throw new Error(json.messages);
    } else return json;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId) => {
    await fetch(serverUrl + "/" + movieId, {
      method: "DELETE"
    });
    return movieId;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    sortBy: sortByDefault
  },
  reducers: {
    sortMovies: (state, action) => {
      state.sortBy = action.payload;
    }
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      state.list = action.payload.data;
    },
    [addMovie.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
    [addMovie.rejected]: (state, action) => {
      console.log("Add movie is rejected: ", action.error.message);
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

// action creators
export const { sortMovies } = moviesSlice.actions;

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

export const selectSortBy = (state) => state.movies.selectSortBy;

export default moviesSlice.reducer;

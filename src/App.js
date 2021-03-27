//import "./styles.css";
import Header from "./app/Containers/Header/Header";
import Body from "./app/Containers/Body/Body";
import Footer from "./app/Containers/Footer/Footer";
import React, { useState } from "react";
import AddMovieDialog from "./app/Components/AddMovieDialog/AddMovieDialog";
import EditMovieDialog from "./app/Components/EditMovieDialog/EditMovieDialog";
import DeleteMovieDialog from "./app/Components/DeleteMovieDialog/DeleteMovieDialog";

let mockedMovie = {
  title: "Mocked title",
  genre: "Mocked genre",
  releaseDate: "2004",
  imageUrl:
    "https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg",
  rating: 4.7,
  duration: "133 min",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

export default function App() {
  // const [movies, setMovies] = useState(predefinedMovies);
  const [sortBy, setSortBy] = useState("releaseDate");

  // add mocked element to array
  const addMovie = (e) => {
    // let newMovies = movies.slice();
    // mockedMovie.id = new Date().getTime();
    // newMovies.push(mockedMovie);
    // newMovies.sort((a, b) => {
    //   return a[sortBy].localeCompare(b[sortBy]);
    // });
    // setMovies(newMovies);
    //setAddMovieDialogVisible(false);
  };

  // Adds " updated" to the editable movie title
  const editMovie = (e) => {
    // let newMovies = movies.slice();
    // newMovies.filter((el) => {
    //   return el.id === editedMovieId;
    // })[0].title += " updated";
    // setMovies(newMovies);
    // setEditMovieDialogVisible(false);
    // setEditedMoviedId(null);
  };

  const deleteMovie = (e) => {
    // let newMovies = movies
    //   .slice()
    // .filter((el) => {
    //   return el.id !== editedMovieId;
    // })
    //   .sort((a, b) => {
    //     return a[sortBy].localeCompare(b[sortBy]);
    //   });
    // setMovies(newMovies);
    // setDeleteMovieDialogVisible(false);
    // if (editedMovieId === selectedMovieId) {
    //   setSelectedMovieId(null);
    //   setMovieInfoMode(false);
    // }
    // setEditedMoviedId(null);
  };

  const handleSortBy = (e, newValue) => {
    // let newMovies = movies.slice();
    // newMovies.sort((a, b) => {
    //   return a[newValue].localeCompare(b[newValue]);
    // });
    // setSortBy(newValue);
    // setMovies(newMovies);
  };

  return (
    <>
      <Header />
      <Body sortBy={sortBy} onChangeSortBy={handleSortBy} />
      <Footer />

      <AddMovieDialog onSubmit={addMovie} />
      <EditMovieDialog onSubmit={editMovie} />
      <DeleteMovieDialog onSubmit={deleteMovie} />
    </>
  );
}

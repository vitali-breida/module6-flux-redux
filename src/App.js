//import "./styles.css";
import Header from "./app/Containers/Header/Header";
import Body from "./app/Containers/Body/Body";
import Footer from "./app/Containers/Footer/Footer";
import React, { useState } from "react";
import AddMovieDialog from "./app/Components/AddMovieDialog/AddMovieDialog";
import EditMovieDialog from "./app/Components/EditMovieDialog/EditMovieDialog";
import DeleteMovieDialog from "./app/Components/DeleteMovieDialog/DeleteMovieDialog";

export default function App() {
  const [sortBy, setSortBy] = useState("releaseDate");

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

      <AddMovieDialog />
      <EditMovieDialog />
      <DeleteMovieDialog />
    </>
  );
}

//import "./styles.css";
import Header from "./app/Containers/Header/Header";
import Body from "./app/Containers/Body/Body";
import Footer from "./app/Containers/Footer/Footer";
import React, { useState } from "react";
import AddMovieDialog from "./app/Components/AddMovieDialog/AddMovieDialog";
import EditMovieDialog from "./app/Components/EditMovieDialog/EditMovieDialog";
import DeleteMovieDialog from "./app/Components/DeleteMovieDialog/DeleteMovieDialog";

let predefinedMovies = [
  {
    id: 1,
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: "2004",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg",
    rating: 4.5,
    duration: "152 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    genre: "Drama,Biography,Music",
    releaseDate: "2003",
    imageUrl:
      "https://s1.livelib.ru/boocover/1005491581/o/2267/Owen_Williams__Bohemian_Rhapsody_The_Official_Book_of_the_Movie.jpeg",
    rating: 4.2,
    duration: "150 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Bill: vol2",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000204256/o/edfb/D._K._Holm__Kill_Bill_An_Unofficial_Casebook.jpeg",
    rating: 3.8,
    duration: "132 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: "2004",
    imageUrl:
      "https://s1.livelib.ru/boocover/1003806448/o/c980/Brandon_T._Snider__Marvelamp039s_Avengers_Infinity_War_The_Cosmic_Quest_Vol._2_A.jpeg",
    rating: 4.0,
    duration: "140 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 5,
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: "2003",
    imageUrl:
      "https://s1.livelib.ru/boocover/1003011535/o/32b8/Bianca_Scardoni__Inception.jpeg",
    rating: 4.8,
    duration: "158 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    title: "Reservoir Dogs",
    genre: "Oscar winning movie",
    releaseDate: "1994",
    imageUrl:
      "https://s1.livelib.ru/boocover/1000108581/o/f2c0/Kventin_Tarantino__Beshenye_psy.jpeg",
    rating: 4.6,
    duration: "139 min",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
].sort((a, b) => {
  // sort by "release date" by default
  return a.releaseDate.localeCompare(b.releaseDate);
});

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

  const getMovieById = (id) => {
    // return movies.filter((el) => {
    //   return el.id === id;
    // })[0];
  };

  return (
    <>
      <Header onGetMovieById={getMovieById} />
      <Body
        // movies={movies}
        sortBy={sortBy}
        onChangeSortBy={handleSortBy}
      />
      <Footer />

      <AddMovieDialog onSubmit={addMovie} />
      <EditMovieDialog onSubmit={editMovie} />
      <DeleteMovieDialog onSubmit={deleteMovie} />
    </>
  );
}

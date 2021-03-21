import AddMovieButton from "../../Components/AddMovieButton/AddMovieButton";
import Search from "../../Components/Search/Search";
import PropTypes from "prop-types";
import MovieInfo from "../../Components/MovieInfo/MovieInfo";
import Logo from "../../Components/Logo/Logo";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "../../Components/SearchIcon/SearchIcon";
import { useSelector } from "react-redux";
import {
  selectIsMovieInfoMode,
  selectSelectedMovieId
} from "../../../features/dialogs/dialogsSlice";

export default function Header(props) {
  const isInfoMode = useSelector(selectIsMovieInfoMode);
  const selectedMovieId = useSelector(selectSelectedMovieId);

  if (isInfoMode) {
    return (
      <>
        <Grid container>
          <Grid item xs={10}>
            <Logo />
          </Grid>
          <Grid item={2}>
            <SearchIcon />
          </Grid>
        </Grid>
        <MovieInfo
          movieId={selectedMovieId}
          onGetMovieById={props.onGetMovieById}
        />
      </>
    );
  } else
    return (
      <>
        <Logo />
        <AddMovieButton />
        <Search />
      </>
    );
}

Header.propTypes = {
  onGetMovieById: PropTypes.func.isRequired
};

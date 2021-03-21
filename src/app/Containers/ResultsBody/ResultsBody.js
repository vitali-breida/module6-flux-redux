import MovieCard from "../MovieCard/MovieCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";

export default function ResultsBody(props) {
  return (
    <GridList cellHeight="auto" cols={3}>
      {props.movies.map((movie) => (
        <GridListTile key={movie.title}>
          <MovieCard
            movieId={movie.id}
            title={movie.title}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            imageUrl={movie.imageUrl}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

PropTypes.ResultsBody = {
  movies: PropTypes.array.isRequired
};

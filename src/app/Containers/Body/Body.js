import ResultsCount from "../../Components/ResultsCount/ResultsCount";
import ResultsFilter from "../../Components/ResultsFilter/ResultsFilter";
import ResultsSort from "../../Components/ResultsSort/ResultsSort";
import ResultsBody from "../ResultsBody/ResultsBody";
import Box from "@material-ui/core/Box";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import PropTypes from "prop-types";

export default function Body(props) {
  return (
    <>
      <Box display="flex">
        <Box width="50%">
          <ResultsFilter />
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <ResultsSort
            sortBy={props.sortBy}
            onChangeSortBy={props.onChangeSortBy}
          />
        </Box>
      </Box>

      <ErrorBoundary>
        <ResultsCount />
        <ResultsBody movies={props.movies} />
      </ErrorBoundary>
    </>
  );
}

Body.propTypes = {
  movies: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(["releaseDate", "title"]),
  onChangeSortBy: PropTypes.func.isRequired
};

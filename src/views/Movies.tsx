import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import { useContext } from "react";
import { SearchContext } from "../utils/SearchContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "../css/components/movies.css";
const Movies = () => {
  const searchContext = useContext(SearchContext);
  const searchContent = searchContext?.search;
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const searchEndpoint = import.meta.env.VITE_SEARCH;
  const url = searchEndpoint + searchContext?.search;

  const {
    data: searchResult,
    loading: searchLoader,
    error: searchError,
  } = useFetch(url, credit);
  const filteredSearchResult = searchResult?.results.filter((movie) => {
    return movie.poster_path !== null;
  });
  return (
    <div className="movies-container">
      <Navbar />
      {filteredSearchResult ? (
        <Container>
          <Typography
            variant="h1"
            sx={{ fontSize: "2.5rem", paddingBlock: "2rem" }}
          >
            Search result for:{" "}
            <span className="search-word">{searchContent}</span>
          </Typography>
          <Grid
            container
            spacing={{ xs: 5, sm: 7, md: 6 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {filteredSearchResult.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </Grid>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Movies;

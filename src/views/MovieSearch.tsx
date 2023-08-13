/** @jsxImportSource @emotion/react */
import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import { useContext } from "react";
import { SearchContext } from "../utils/SearchContext";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const containerStyle = css`
  min-height: 100vh;
  background-color: black;
`;

const centerText = css`
  font-size: 3rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const heighlightText = css`
  color: #db0000;
  margin-left: 0.5rem;
`;

const MovieSearch = () => {
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
    <div>
      <Navbar />
      {filteredSearchResult ? (
        <Container css={containerStyle}>
          <Typography variant="h1" css={centerText}>
            Search result for:
            <span css={heighlightText}>{searchContent}</span>
          </Typography>
          <Grid
            container
            spacing={{ xs: 5, sm: 7, md: 6 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {filteredSearchResult.map((movie) => (
              <MovieItem
                movie={movie}
                imageSize="300px"
                gridSpace={[2, 4, 4]}
              />
            ))}
          </Grid>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MovieSearch;

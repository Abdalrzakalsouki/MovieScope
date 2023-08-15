/** @jsxImportSource @emotion/react */
import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import { useContext } from "react";
import { SearchContext } from "../utils/SearchContext";
import { css } from "@emotion/react";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "./Error";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const containerStyle = css`
  min-height: 100vh;
`;

const heighlightText = css`
  color: #db0000;
  margin-left: 0.5rem;
`;

const MovieSearch = () => {
  const searchContext = useContext(SearchContext);
  const searchContent = searchContext.search;
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const searchEndpoint = import.meta.env.VITE_SEARCH;
  const url = searchEndpoint + searchContext.search;

  const {
    data: searchResult,
    loading: searchLoader,
    error: searchError,
  } = useFetch(url, credit);
  const filteredSearchResult = searchResult?.results.filter((movie) => {
    return movie.poster_path !== null;
  });
  const searchData =
    filteredSearchResult != undefined && filteredSearchResult?.length > 0
      ? true
      : false;
  return (
    <div>
      <Navbar />
      {searchError ? (
        <Error />
      ) : (
        <>
          {searchLoader ? (
            <CircularProgress className="spinner" />
          ) : (
            <>
              {searchData && filteredSearchResult ? (
                <Container css={containerStyle}>
                  <Typography variant="h1">
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
                        key={movie.id}
                        movie={movie}
                        imageSize="300px"
                        gridSpace={[2, 4, 4]}
                      />
                    ))}
                  </Grid>
                </Container>
              ) : (
                <Typography
                  variant="h1"
                  sx={{ textAlign: "center", paddingTop: "12rem" }}
                >
                  Sorry, we could not find your movie{" "}
                  <span className="keyword">):</span>
                </Typography>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default MovieSearch;

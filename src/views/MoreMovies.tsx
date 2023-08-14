import Navbar from "./Navbar";
import MovieItem from "../components/MovieItem";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../Interfaces/interface";
import { useLocation } from "react-router-dom";
import { Grid, Typography, Container } from "@mui/material";

const MoreMovies = () => {
  const [searchPrams] = useSearchParams();
  const location = useLocation();
  const merging = [];
  for (const entry of searchPrams.entries()) {
    merging.push(entry[0]);
  }

  const movies = JSON.parse(
    merging.reduce((accumulator, item) => accumulator + item)
  );

  const checkHeadingFromURL = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes("popular-movies")) return "popular movies";
    else if (path.includes("top-rated-movies")) return "top rated movies";
    else if (path.includes("upcoming-movies")) return "upcoming movies";
    else return "Movies";
  };

  const heading = checkHeadingFromURL();
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h1">{heading}</Typography>
        <Grid
          container
          spacing={{ xs: 5, sm: 7, md: 6 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          sx={{ margin: "auto" }}
        >
          {movies.results.map((movie: Movie) => (
            <MovieItem movie={movie} imageSize="300px" gridSpace={[2, 2, 4]} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MoreMovies;

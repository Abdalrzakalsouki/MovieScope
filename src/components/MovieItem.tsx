import Grid from "@mui/material/Grid";
import { Movie } from "../Interfaces/interface.ts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";
const MovieItem = ({
  movie,
  imageSize,
  gridSpace,
}: {
  movie: Movie;
  imageSize: string;
  gridSpace: number[];
}) => {
  const movieContext = useContext(MovieContext);
  const onMoviePosterClick = () => {
    if (movieContext) movieContext.setMovieInfo(movie);

    navigate(`/movie/${movie.title}/${movie.id}`);
  };
  const navigate = useNavigate();
  const { poster_path } = movie;
  return (
    <Grid item xs={gridSpace[0]} sm={gridSpace[1]} md={gridSpace[2]}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie poster"
        onClick={() => onMoviePosterClick()}
        style={{ maxWidth: imageSize, height: "auto", cursor: "pointer" }}
      />
    </Grid>
  );
};

export default MovieItem;

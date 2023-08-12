import Grid from "@mui/material/Grid";
import { MovieItemProps } from "../Interfaces/interface.ts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";
const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const movieContext = useContext(MovieContext);
  const onMoviePosterClick = () => {
    if (movieContext) movieContext.setMovieInfo(movie);

    navigate(`/movie/${movie.title}/${movie.id}`);
  };
  const navigate = useNavigate();
  const { poster_path } = movie;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie poster"
        onClick={() => onMoviePosterClick()}
        style={{ maxWidth: "300px", height: "auto", cursor: "pointer" }}
      />
    </Grid>
  );
};

export default MovieItem;

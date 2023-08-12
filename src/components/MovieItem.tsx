import Grid from "@mui/material/Grid";
import { MovieItemProps } from "../Interfaces/interface.ts";
import { useNavigate } from "react-router-dom";
const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const onMoviePosterClick = () => {
    navigate(`/movie/${movie.title}`);
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

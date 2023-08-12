import Grid from "@mui/material/Grid";
import { MovieItemProps } from "../Interfaces/interface.ts";

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie poster"
        style={{ maxWidth: "300px", height: "auto", cursor: "pointer" }}
      />
    </Grid>
  );
};

export default MovieItem;

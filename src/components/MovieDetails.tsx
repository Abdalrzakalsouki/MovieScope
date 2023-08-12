import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { MovieItemProps } from "../Interfaces/interface.tsx";
const MovieDetails: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5">{movie.title}</Typography>
          <Typography variant="h6">{movie.original_title}</Typography>
          <Typography>{movie.overview}</Typography>
          <Typography>{movie.adult}</Typography>
          <Typography>{movie.original_language}</Typography>
          <Typography>{movie.release_date}</Typography>
          <Typography>{movie.popularity}</Typography>
          <Typography>{movie.vote_average}</Typography>
        </Grid>
      </Grid>
      Test
    </div>
  );
};

export default MovieDetails;

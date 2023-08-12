import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { MovieItemProps } from "../Interfaces/interface.tsx";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";
const MovieDetails: React.FC<MovieItemProps> = ({ movie }) => {
  const movieContext = useContext(MovieContext);
  console.log(movieContext.movie);
  const {
    adult,
    genre_ids,
    original_language,
    original_title,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    vote_average,
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h6">{original_title}</Typography>
          <Typography>{overview}</Typography>
          <Typography>{adult}</Typography>
          <Typography>{original_language}</Typography>
          <Typography>{release_date}</Typography>
          <Typography>{popularity}</Typography>
          <Typography>{vote_average}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;

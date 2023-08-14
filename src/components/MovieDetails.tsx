/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Movie } from "../Interfaces/interface.tsx";
import { css } from "@emotion/react";
import Navbar from "../views/Navbar.tsx";

const movieContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem 20px 20px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const moviePoster = css`
  max-width: 100%;
  height: auto;
`;

const infoContainer = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const title = css`
  color: #db0000;
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: bold;
`;

const overviewInfo = css`
  max-width: 75%;
  padding-bottom: 1rem;
`;
const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <Navbar />
      <div css={movieContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              css={moviePoster}
            />
          </Grid>
          <Grid item xs={12} sm={8} css={infoContainer}>
            <Typography css={title} variant="h1">
              {movie.title}
            </Typography>
            <Typography css={overviewInfo}>{movie.overview}</Typography>
            <Typography>Adult: {movie.adult ? "Yes" : "No"}</Typography>
            <Typography>Language: {movie.original_language}</Typography>
            <Typography>Release Date: {movie.release_date}</Typography>
            <Typography>Popularity: {movie.popularity}</Typography>
            <Typography>Rating: {movie.vote_average}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MovieDetails;

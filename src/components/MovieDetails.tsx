/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Movie } from "../Interfaces/interface.tsx";
import { css } from "@emotion/react";
import Navbar from "../views/Navbar.tsx";
import { memo } from "react";
import Container from "@mui/material/Container";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

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
  max-width: 90%;
  height: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  border-radius: 20px;
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
  text-align: justify;
  padding-bottom: 2rem;
`;

const MovieDetails = memo(({ movie }: { movie: Movie }) => {
  return (
    <div>
      <Navbar />
      <div css={movieContainer}>
        <Grid container style={{ margin: "auto" }}>
          <Grid item xs={12} sm={8} md={4} style={{ paddingTop: "100px" }}>
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
            <Container>
              <div className="info-box">
                <Typography className="info-box-text">
                  Adult: {movie.adult ? "Yes" : "No"}
                </Typography>
                <Typography className="info-box-text">
                  Language: {movie.original_language}
                </Typography>
                <Typography className="info-box-text">
                  Release Date: {movie.release_date}
                </Typography>
              </div>
              <div className="rating-popularity">
                <Typography className="info-block popularity">
                  <AutoAwesomeIcon /> {movie.popularity}
                </Typography>
                <Typography className="info-block rating">
                  <StarIcon />
                  {movie.vote_average}
                </Typography>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
});

export default MovieDetails;

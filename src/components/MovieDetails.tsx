/** @jsxImportSource @emotion/react */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Movie } from "../Interfaces/interface.tsx";
import { css } from "@emotion/react";
import Navbar from "../views/Navbar.tsx";
import { memo } from "react";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LanguageIcon from "@mui/icons-material/Language";

const container = css`
  position: relative;
  overflow: hidden;
`;

const coverImageContainer = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 40%);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
`;
const coverImag = css`
  display: block;
  max-width: 100%;
  z-index: -999;
  background-repeat: no-repeat;
  background-size: contain;
`;

const posterImage = css`
  max-width: 350px;
  height: 500px;
  left: 10%;
  z-index: 999;
  border-radius: 10px;
`;

const infoBox = css`
  height: 500px;
  padding-inline: 50px;
  right: 0;
`;

const textInfoBox = css`
  display: flex;
  padding-bottom: 15px;
  font-weight: bold;
`;

const textInfoSpan = css`
  margin-left: 10px;
`;
const MovieDetails = memo(({ movie }: { movie: Movie }) => {
  return (
    <div>
      <Navbar />
      <div css={container}>
        <div css={coverImageContainer}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            css={coverImag}
          />
        </div>
        <Grid container>
          <Grid item xs={12} sm={8} md={4}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              css={posterImage}
              className="position-abs"
            />
          </Grid>
          <Grid item xs={12} sm={8} className="position-abs" css={infoBox}>
            <Typography variant="h1">{movie.title}</Typography>
            <div>
              <Typography css={textInfoBox}>
                <CalendarTodayIcon />
                <span css={textInfoSpan}>{movie.release_date}</span>
              </Typography>
              <Typography css={textInfoBox}>
                <StarIcon sx={{ color: "gold" }} />
                <span css={textInfoSpan}>{movie.vote_average}</span>
              </Typography>
              <Typography css={textInfoBox}>
                <LanguageIcon />
                <span css={textInfoSpan}>{movie.original_language}</span>
              </Typography>
            </div>
            <div>
              <Typography sx={{ paddingBlock: "10px", fontSize: "25px" }}>
                Overview
                <Typography>{movie.overview}</Typography>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
});

export default MovieDetails;

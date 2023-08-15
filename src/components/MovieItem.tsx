/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import { Movie } from "../Interfaces/interface.ts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";

const centerPoster = css`
  height: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.5, 1);
  will-change: transform;
  &:hover {
    transform: scale(1.2);
    transition: transform 1s cubic-bezier(0.2, 0.7, 0.5, 1);
  }
`;

const slideTransition = css`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const imageContainer = css`
  position: relative;
  overflow: hidden;
`;

const girdContainer = css`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const activeSlide = css`
  opacity: 1;
`;

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
  const [active, setActive] = useState<boolean>(false);
  const { poster_path } = movie;
  const handleImageLoad = () => {
    setActive(true);
  };
  return (
    <Grid
      item
      xs={gridSpace[0]}
      sm={gridSpace[1]}
      md={gridSpace[2]}
      css={girdContainer}
    >
      <div css={imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie poster"
          onClick={onMoviePosterClick}
          css={[centerPoster, slideTransition, active && activeSlide]}
          style={{ maxWidth: imageSize }}
          onLoad={handleImageLoad}
        />
        <img />
      </div>
    </Grid>
  );
};

export default MovieItem;

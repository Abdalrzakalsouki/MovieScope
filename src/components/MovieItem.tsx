/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Grid";
import { Movie } from "../Interfaces/interface.ts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo } from "react";

const centerPoster = css`
  height: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

const girdContainer = css`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const MovieItem = memo(
  ({
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
      <Grid
        item
        xs={gridSpace[0]}
        sm={gridSpace[1]}
        md={gridSpace[2]}
        css={girdContainer}
      >
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie poster"
          effect="blur"
          onClick={() => onMoviePosterClick()}
          css={centerPoster}
          style={{ maxWidth: imageSize }}
        />
        <img />
      </Grid>
    );
  }
);

export default MovieItem;

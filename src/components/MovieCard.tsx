/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Movie } from "../Interfaces/interface.ts";
import MovieItem from "../components/MovieItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { css } from "@emotion/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const arrowLeft = css`
  position: absolute;
  content: "";
  top: 50%;
  font-size: 60px;
  color: red;
  transform: translate(-50%, -50%);
  left: 10px;
  cursor: pointer;
`;

const arrowRight = css`
  position: absolute;
  content: "";
  top: 50%;
  font-size: 60px;
  color: red;
  transform: translate(-50%, -50%);
  right: 10px;
  cursor: pointer;
`;

const movieCard = css`
  background-color: #ffffff;
`;

const MovieCard = ({
  heading,
  movieList,
}: {
  heading: string;
  movieList: Movie;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const endIndex = currentIndex + 5;
  const movies = movieList.slice(currentIndex, endIndex);

  const handleRightArrow = () => {
    setCurrentIndex(currentIndex + 5);
  };

  const handleLeftArrow = () => {
    if (currentIndex >= 5) setCurrentIndex(currentIndex - 5);
  };
  return (
    <Container sx={{ position: "relative" }}>
      <Typography sx={{ paddingBlock: "2rem" }} variant="h6">
        {heading}
      </Typography>
      <Grid container spacing={2} css={movieCard}>
        {movies.map((movie) => (
          <MovieItem movie={movie} imageSize="250px" gridSpace={[10, 6, 3]} />
        ))}
      </Grid>
      <ChevronLeftIcon css={arrowLeft} onClick={() => handleLeftArrow()} />
      <ChevronRightIcon css={arrowRight} onClick={() => handleRightArrow()} />
    </Container>
  );
};

export default MovieCard;

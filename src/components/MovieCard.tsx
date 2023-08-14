/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { MoviesResponse } from "../Interfaces/interface.ts";
import MovieItem from "../components/MovieItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const arrowLeft = css`
  position: absolute;
  content: "";
  top: 50%;
  font-size: 60px;
  color: #db0000;
  transform: translate(-50%, -50%);
  left: 13px;
  cursor: pointer;
`;

const arrowRight = css`
  position: absolute;
  content: "";
  top: 50%;
  font-size: 60px;
  color: #db0000;
  transform: translate(-50%, -50%);
  right: 0;
  cursor: pointer;
`;

const viewMore = css`
  color: #db0000;
  text-decoration: none;
  text-align: center;
  display: block;
  padding-bottom: 1rem;
`;

const buttonStyle = css`
  display: block;
  margin: auto;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
`;

const MovieCard = ({
  heading,
  movieList,
}: {
  heading: string;
  movieList: MoviesResponse;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const endIndex = currentIndex + 4;
  const movies = movieList.results.slice(currentIndex, endIndex);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleRightArrow = () => {
    const incress = currentIndex + 4;
    if (incress < movieList.results.length) setCurrentIndex(incress);
  };

  const handleLeftArrow = () => {
    if (currentIndex >= 4) setCurrentIndex(currentIndex - 4);
  };
  return (
    <Container sx={{ position: "relative", marginTop: "1.5rem" }}>
      <Typography sx={{ paddingBlock: "2rem" }} variant="h2">
        {heading}
      </Typography>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <MovieItem movie={movie} imageSize="250px" gridSpace={[10, 6, 3]} />
        ))}
      </Grid>
      {matches ? (
        <>
          <ChevronLeftIcon css={arrowLeft} onClick={() => handleLeftArrow()} />
          <ChevronRightIcon
            css={arrowRight}
            onClick={() => handleRightArrow()}
          />
          <Link css={viewMore} to="/view-more">
            View more
          </Link>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: theme.palette.primary.main }}
          css={buttonStyle}
        >
          View More
        </Button>
      )}
    </Container>
  );
};

export default MovieCard;

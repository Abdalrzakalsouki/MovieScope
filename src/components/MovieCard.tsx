/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { MoviesResponse } from "../Interfaces/interface.ts";
import MovieItem from "../components/MovieItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useQueryParams from "../hooks/useQueryParams.tsx";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { memo } from "react";

const buttonStyle = css`
  display: block;
  margin: auto;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
`;

const headings = css`
  padding-top: 100px;
  padding-bottom: 30px;
  text-align: center;
`;

const gridContainer = css`
  margin: "auto";
  text-align: center;
  @media (max-width: 600px) {
    place-content: center;
  }
`;

const MovieCard = memo(
  ({ heading, movieList }: { heading: string; movieList: MoviesResponse }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isClickAllowed, setIsClickAllowed] = useState<boolean>(true);
    const endIndex = currentIndex + 4;
    const movies = movieList.results.slice(currentIndex, endIndex);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const handleRightArrow = () => {
      if (isClickAllowed) {
        const incress = currentIndex + 4;
        if (incress < movieList.results.length) setCurrentIndex(incress);
        setIsClickAllowed(false);
        setTimeout(() => {
          setIsClickAllowed(true);
        }, 500);
      }
    };
    const handleLeftArrow = () => {
      if (isClickAllowed) {
        if (currentIndex >= 4) setCurrentIndex(currentIndex - 4);
        setIsClickAllowed(false);
        setTimeout(() => {
          setIsClickAllowed(true);
        }, 500);
      }
    };

    const goToViewMore = useQueryParams(movieList, heading);
    return (
      <Container sx={{ position: "relative", marginTop: "1.5rem" }}>
        <Typography css={headings} variant="h2">
          {heading}
        </Typography>
        <Grid container spacing={2} css={gridContainer}>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              imageSize="250px"
              gridSpace={[10, 6, 3]}
            />
          ))}
        </Grid>
        {matches ? (
          <>
            <ChevronLeftIcon
              className="arrows arrow-left"
              onClick={() => handleLeftArrow()}
            />
            <ChevronRightIcon
              className="arrows arrow-right"
              onClick={() => handleRightArrow()}
            />
            <p className="view-more" onClick={goToViewMore}>
              View more
            </p>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: theme.palette.primary.main }}
            css={buttonStyle}
            onClick={goToViewMore}
          >
            View More
          </Button>
        )}
      </Container>
    );
  }
);

export default MovieCard;

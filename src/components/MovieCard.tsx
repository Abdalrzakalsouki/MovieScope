import Typography from "@mui/material/Typography";
import { Movie } from "../Interfaces/interface.ts";
import MovieItem from "../components/MovieItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const MovieCard = ({
  heading,
  movieList,
}: {
  heading: string;
  movieList: Movie;
}) => {
  return (
    <Container>
      <Typography sx={{ paddingBlock: "2rem" }} variant="h6">
        {heading}
      </Typography>
      <Grid container spacing={2}>
        {movieList.map((movie) => (
          <MovieItem movie={movie} imageSize="250px" gridSpace={[10, 6, 3]} />
        ))}
      </Grid>
      <ChevronRightIcon />
      <ChevronLeftIcon />
    </Container>
  );
};

export default MovieCard;

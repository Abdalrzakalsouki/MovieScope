import MovieItem from "../components/MovieItem";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../Interfaces/interface";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
const MoreMovies = () => {
  const [searchPrams] = useSearchParams();
  const location = useLocation();
  const merging = [];
  for (const entry of searchPrams.entries()) {
    merging.push(entry[0]);
  }

  const movies = JSON.parse(
    merging.reduce((accumulator, item) => accumulator + item)
  );

  const checkHeadingFromURL = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes("popular-movies")) return "popular movies";
    else if (path.includes("top-rated-movies")) return "top rated movies";
    else if (path.includes("upcoming-movies")) return "upcoming movies";
    else return "Movies";
  };

  const heading = checkHeadingFromURL();
  return (
    <div>
      <Typography variant="h1">{heading}</Typography>
      {movies.results.map((movie: Movie) => (
        <MovieItem movie={movie} imageSize="400px" gridSpace={[2, 4, 4]} />
      ))}
    </div>
  );
};

export default MoreMovies;

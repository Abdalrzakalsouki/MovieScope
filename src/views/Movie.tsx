import MovieDetails from "../components/MovieDetails";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext.tsx";
const Movie = () => {
  const movieContext = useContext(MovieContext);
  return (
    <div>
      <MovieDetails movie={movieContext.movie} />
    </div>
  );
};

export default Movie;

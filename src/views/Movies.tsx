import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "./Error";
import { MoviesResponse } from "../Interfaces/interface";

const Movies = () => {
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const popularEndpoint = import.meta.env.VITE_POUPLAR;
  const topRatedEnpoint = import.meta.env.VITE_TOP_RATED;
  const upcomingEndpoint = import.meta.env.VITE_UPCOMING;

  const {
    data: popular,
    loading: popularLoader,
    error: popularError,
  } = useFetch<MoviesResponse>(popularEndpoint, credit);

  const {
    data: topRated,
    loading: topRatedLoader,
    error: topRatedError,
  } = useFetch<MoviesResponse>(topRatedEnpoint, credit);

  const {
    data: upcoming,
    loading: upcomingLoader,
    error: upcomingError,
  } = useFetch<MoviesResponse>(upcomingEndpoint, credit);

  const loader = ![popularLoader, topRatedLoader, upcomingLoader].every(
    Boolean
  );
  const errors = ![popularError, topRatedError, upcomingError].every(Boolean);
  return (
    <div>
      {errors ? (
        <div>
          {loader ? (
            <>
              <Navbar />
              {popular && (
                <MovieCard heading="Popular movies" movieList={popular} />
              )}
              {topRated && (
                <MovieCard heading="Top Rated movies" movieList={topRated} />
              )}
              {upcoming && (
                <MovieCard heading="Upcoming movies" movieList={upcoming} />
              )}
            </>
          ) : (
            <CircularProgress className="spinner" />
          )}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Movies;

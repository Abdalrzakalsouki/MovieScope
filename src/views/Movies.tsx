import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const popularEndpoint = import.meta.env.VITE_POUPLAR;
  const topRatedEnpoint = import.meta.env.VITE_TOP_RATED;
  const upcomingEndpoint = import.meta.env.VITE_UPCOMING;
  const genersEndpoint = import.meta.env.VITE_GENRES;

  const {
    data: popular,
    loading: popularLoader,
    error: popularError,
  } = useFetch(popularEndpoint, credit);

  const {
    data: topRated,
    loading: topRatedLoader,
    error: topRatedError,
  } = useFetch(topRatedEnpoint, credit);

  const {
    data: upcoming,
    loading: upcomingLoader,
    error: upcomingError,
  } = useFetch(upcomingEndpoint, credit);

  const {
    data: geners,
    loading: genersLoader,
    error: genersError,
  } = useFetch(genersEndpoint, credit);

  return (
    <div>
      <Navbar />
      {popular && (
        <MovieCard heading="Popular movies" movieList={popular.results} />
      )}
      {topRated && (
        <MovieCard heading="Top Rated movies" movieList={topRated.results} />
      )}
      {upcoming && (
        <MovieCard heading="Upcoming movies" movieList={upcoming.results} />
      )}
    </div>
  );
};

export default Movies;

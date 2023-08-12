import Navbar from "./Navbar";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import MovieCard from "../components/MovieCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const Movies = () => {
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const popularEndpoint = import.meta.env.VITE_POUPLAR;
  const topRatedEnpoint = import.meta.env.VITE_TOP_RATED;
  const upcomingEndpoint = import.meta.env.VITE_UPCOMING;
  const genersEndpoint = import.meta.env.VITE_GENRES;

  const sliceArr = (
    arr: Array<object>,
    strIndex: number = 0,
    endIndex: number = 4
  ) => {
    if (arr) return arr.slice(strIndex, endIndex);
  };

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

  const popularList = sliceArr(popular?.results);
  const topRatedList = sliceArr(topRated?.results);
  const upcomingList = sliceArr(upcoming?.results);
  return (
    <div>
      <Navbar />
      {popular && (
        <MovieCard heading="Popular movies" movieList={popularList} />
      )}
      {topRated && (
        <MovieCard heading="Popular movies" movieList={topRatedList} />
      )}
      {upcoming && (
        <MovieCard heading="Popular movies" movieList={upcomingList} />
      )}
    </div>
  );
};

export default Movies;

import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";
import { css } from "@emotion/react";
import { Typography, Grid } from "@mui/material";

const posterStyles = css`
  padding: 16px;
`;

const Movies = () => {
  const credit = import.meta.env.VITE_ACCESS_TOKEN;
  const pouplar = import.meta.env.VITE_POUPLAR;
  const topRated = import.meta.env.VITE_TOP_RATED;
  const upcoming = import.meta.env.VITE_UPCOMING;

  const { data, loading, error } = useFetch(pouplar, credit);
  return (
    <div>
      <Typography variant="h2">Popular</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} css={posterStyles}></Grid>
      </Grid>
    </div>
  );
};
export default Movies;

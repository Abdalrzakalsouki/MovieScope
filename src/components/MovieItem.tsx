import Grid from "@mui/material/Grid";

interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="movie poster"
        style={{ maxWidth: "300px", height: "auto", cursor: "pointer" }}
      />
    </Grid>
  );
};

export default MovieItem;

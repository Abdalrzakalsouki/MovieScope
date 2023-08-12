interface MovieItemProps {
  poster: string;
}

const MovieItem: React.FC<MovieItemProps> = ({ poster }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieItem;

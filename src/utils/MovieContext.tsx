import { createContext, useState, ReactNode } from "react";
import { Movie } from "../Interfaces/interface";

interface MovieContextType {
  movie: Movie;
  setMovieInfo: (data: Movie) => void;
}

export const MovieContext = createContext<MovieContextType>({
  movie: {
    adult: false,
    backdrop_path: "",
    genre_ids: [0, 1, 2],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  setMovieInfo: () => {},
});

const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<Movie>({
    adult: false,
    backdrop_path: "",
    genre_ids: [0, 1, 2],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  });

  const setMovieInfo = (data: Movie) => {
    setMovie(data);
  };

  const contextValue: MovieContextType = {
    movie,
    setMovieInfo,
  };
  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

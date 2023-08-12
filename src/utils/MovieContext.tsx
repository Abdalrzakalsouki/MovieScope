import { createContext, useState, ReactNode } from "react";
import { Movie } from "../Interfaces/interface";
interface MovieContextType {
  movie: Movie;
  setMovieInfo: (data: Movie) => void;
}

export const MovieContext = createContext<MovieContextType | undefined>(
  undefined
);

const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<Movie>({});

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

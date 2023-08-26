export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MoviesPage {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
  id?: number;
}

export interface Cast {
  adult: boolean;
  cast_id: string;
  character: string;
  credit_id: number;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Crew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: boolean;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

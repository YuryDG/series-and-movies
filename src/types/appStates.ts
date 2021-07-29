import { Movie, Serie } from "./seriesAndMovies";

export type SeriesAndMoviesState = {
  data: (Movie | Serie)[];
  status: '' | 'LOADING' | 'LOADED' | 'ERROR';
  error?: string;
}
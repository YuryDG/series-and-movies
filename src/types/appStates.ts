import { Movie, Serie, SortFilter } from "./seriesAndMovies";

export type SeriesAndMoviesState = {
  data: (Movie | Serie)[];
  status: '' | 'LOADING' | 'LOADED' | 'ERROR';
  error?: string;
}

type Pagination = {
  itemsPerPage: number;
  currentPage: number;
}

export type ProgramType = '' | 'movies' | 'series';

export type FiltersState = {
  year: number;
  type: ProgramType;
  searchTerm: string;
  sortBy: SortFilter,
  pagination: Pagination
}
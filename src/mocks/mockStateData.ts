import { RootState } from "../app/store";
import { mockSeriesMovieData } from "./mockSeriesMovieData";

export const mockStateData: RootState = {
  filters: {
    year: 0,
    type: '',
    searchTerm: '',
    sortBy: '',
    pagination: {
      currentPage: 1,
      itemsPerPage: 6
    }
  },
  seriesAndMovies: {
    data: mockSeriesMovieData,
    status: '',
    error: '',
  },
  counter: {
    value: 1,
    status: 'idle'
  }
}
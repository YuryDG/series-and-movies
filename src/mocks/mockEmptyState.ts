import { RootState } from "../app/store";

export const mockEmptyState: RootState = {
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
    data: [],
    status: '',
    error: '',
  },
  counter: {
    value: 1,
    status: 'idle'
  }
}
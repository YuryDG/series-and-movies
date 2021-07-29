import { RootState } from "../app/store";

export const selectSeriesAndMovies = (state: RootState) => state.seriesAndMovies;
export const selectPagination = (state: RootState) => state.filters.pagination;
export const selectFilters = (state: RootState) => state.filters

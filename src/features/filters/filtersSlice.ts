import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState, ProgramType } from "../../types";

export const initialState: FiltersState = {
  year: 0,
  type: '',
  searchTerm: '',
  sortBy: '',
  pagination: {
    currentPage: 1,
    itemsPerPage: process.env.REACT_APP_ITEMS_PER_PAGE ? +process.env.REACT_APP_ITEMS_PER_PAGE : 6
  }
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setYearFilter: (state, { payload }: PayloadAction<number>) => {
      state.year = payload;
      state.pagination.currentPage = 1;
    },
    setSearchTermFilter: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
      state.pagination.currentPage = 1;
    },
    setProgramFilter: (state, { payload }: PayloadAction<ProgramType>) => {
      state.type = payload;
      state.pagination.currentPage = 1;
    },
    setSortFilter: (state, { payload }: PayloadAction<FiltersState['sortBy']>) => {
      state.sortBy = payload;
      state.pagination.currentPage = 1;
    },
    clearFilters: (state) => {
      state = initialState;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.pagination.currentPage = payload
    }
  },
});

export default filtersSlice.reducer;
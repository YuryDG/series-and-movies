import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../../types";

const initialState: FiltersState = {
  year: 0,
  type: '',
  searchTerm: '',
  sortBy: '',
  pagination: {
    currentPage: 1,
    itemsPerPage: 6
  }
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setYearFilter: (state, { payload }: PayloadAction<number>) => {
      state.year = payload;
    },
    setSearchTermFilter: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
    setProgramFilter: (state, { payload }: PayloadAction<string>) => {
      state.type = payload;
    },
    setSortFilter: (state, { payload }: PayloadAction<FiltersState['sortBy']>) => {
      state.sortBy = payload;
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
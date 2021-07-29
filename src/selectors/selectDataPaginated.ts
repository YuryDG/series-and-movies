import { createSelector } from "@reduxjs/toolkit";
import { selectPagination } from "./basics";
import { selectDataSorted } from "./selectDataSorted";

// return data filter, sorted and paginated for the current page
export const selectDataPaginated = createSelector(
  selectDataSorted,
  selectPagination,
  (data, pagination) => {
    return data.slice(0, pagination.itemsPerPage * pagination.currentPage);
  })
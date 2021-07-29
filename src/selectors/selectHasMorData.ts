import { createSelector } from "@reduxjs/toolkit";
import { selectPagination } from "./basics";
import { selectDataFiltered } from "./selectDataFiltered";

// boolean that indicate if there is more data to load according 
// to the current filter
export const selectorHasMoreData = createSelector(
  selectDataFiltered,
  selectPagination,
  (data, pagination) => {
    const totalItems = data.length
    let totalPages = Math.trunc(totalItems / pagination.itemsPerPage)
    if (totalItems % pagination.itemsPerPage !== 0) {
      totalPages += 1;
    }
    return pagination.currentPage < totalPages
  }
)
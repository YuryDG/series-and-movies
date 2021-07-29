import { createSelector } from "@reduxjs/toolkit";
import { comparerByTitle, comparerByYear } from "../utils";
import { selectFilters } from "./basics";
import { selectDataFiltered } from "./selectDataFiltered";

// return data filtered and sorted by the selected filter if any
export const selectDataSorted = createSelector(
  selectDataFiltered,
  selectFilters,
  (data, filters) => {
    const filteredData = data.slice();

    if (filters.sortBy) {
      if (filters.sortBy === 'title') {
        filteredData.sort(comparerByTitle)
      } else {
        filteredData.sort(comparerByYear)
      }
    }
    return filteredData
  })
import { createSelector } from "@reduxjs/toolkit"
import { Movie, Serie } from "../types"
import { selectFilters, selectSeriesAndMovies } from "./basics"

// return data matching with filters
export const selectDataFiltered = createSelector(
  selectSeriesAndMovies,
  selectFilters,
  ({ data }, filters) => {

    // TODO: refactor this predicates
    const predSearchTerm = (item: Movie | Serie): boolean => {
      if (!filters.searchTerm) {
        return true
      } else {
        return item.title.toLowerCase().indexOf(filters.searchTerm.toLowerCase()) !== -1
      }
    }

    const predYear = (item: Movie | Serie): boolean => {
      if (!filters.year) {
        return true
      } else {
        return item.releaseYear === filters.year
      }
    }

    const predProgramType = (item: Movie | Serie): boolean => {
      if (!filters.type) {
        return true
      } else {
        return item.programType === filters.type
      }
    }

    // only items that match with all predicated will be returned
    const predicate = (item: Movie | Serie): boolean => {
      return predYear(item) && predProgramType(item) && predSearchTerm(item)
    }

    // data filtered
    return data.filter(predicate);
  }
)
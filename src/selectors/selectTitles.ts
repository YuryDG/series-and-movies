import { createSelector } from "@reduxjs/toolkit"
import { selectSeriesAndMovies } from "./basics"

export const selectTitles = createSelector(
  selectSeriesAndMovies,
  ({ data }) => {
    return data.map(item => item.title)
  }
)
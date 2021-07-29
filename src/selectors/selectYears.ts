import { createSelector } from "@reduxjs/toolkit";
import { getValidYears } from "../utils/getValidYears";
import { selectSeriesAndMovies } from "./basics";

export const selectYears = createSelector(
  selectSeriesAndMovies,
  ({ data }) => {
    const years = data.map(item => item.releaseYear)
    return getValidYears(years);
  }
)
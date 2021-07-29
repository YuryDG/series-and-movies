import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";

export const loadSeriesAndMovies = createAsyncThunk(
  'seriesAndMovies/fetchData',
  async () => {
    const response = await API.getSeriesAndMovies();
    return response.data;
  }
);
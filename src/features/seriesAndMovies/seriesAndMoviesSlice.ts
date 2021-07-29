import {
  createSlice,
} from '@reduxjs/toolkit';
import { SeriesAndMoviesState } from '../../types';
import { parseSeriesAndMoviesData } from '../../utils';
import { loadSeriesAndMovies } from './actions';

const initialState: SeriesAndMoviesState = {
  data: [],
  status: '',
  error: '',
};

export const seriesAndMoviesSlice = createSlice({
  name: 'seriesAndMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSeriesAndMovies.pending, (state) => {
        state.status = 'LOADING';
        state.data = [];
        state.error = '';
      })
      .addCase(loadSeriesAndMovies.rejected, (state, action) => {
        state.status = 'ERROR';
        state.data = [];
        state.error = action.error.message
      })
      .addCase(loadSeriesAndMovies.fulfilled, (state, { payload }) => {
        state.status = 'LOADED';
        state.data = parseSeriesAndMoviesData(payload);
        state.error = '';
      });
  },
});

export default seriesAndMoviesSlice.reducer;
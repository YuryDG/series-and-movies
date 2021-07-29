import { mockApiResponse, mockSeriesMovieData } from '../../../mocks';
import { SeriesAndMoviesState } from '../../../types';
import { loadSeriesAndMovies } from '../actions';
import reducer from '../seriesAndMoviesSlice';

describe('seriesAndMoviesSlice reducer', () => {
  const initialState: SeriesAndMoviesState = {
    data: [],
    status: '',
    error: ''
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('state.status should be loaded', () => {
    const action = loadSeriesAndMovies.fulfilled(mockApiResponse, '')
    expect(reducer(initialState, action)).toEqual({
      data: mockSeriesMovieData,
      status: 'LOADED',
      error: ''
    });
  })

  it('state.status should be "ERROR"', () => {
    const action = loadSeriesAndMovies.rejected(new Error('Network Error'), '')
    expect(reducer(initialState, action)).toEqual({
      data: [],
      status: 'ERROR',
      error: 'Network Error'
    });
  })

  it('state should be loading', () => {
    const action = loadSeriesAndMovies.pending('');
    expect(reducer(initialState, action)).toEqual({
      data: [],
      status: 'LOADING',
      error: ''
    });
  })
});

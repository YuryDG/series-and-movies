import {
  setYearFilter,
  clearFilters,
  setCurrentPage,
  setProgramFilter,
  setSearchTermFilter,
  setSortFilter
} from '../actions';
import reducer, { initialState } from '../filtersSlice';

describe('reducer filters', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should set the year', () => {
    const state = reducer(initialState, setYearFilter(2012));
    expect(state.year).toBe(2012);
  });

  it('should set the program type', () => {
    const state = reducer(initialState, setProgramFilter('movie'));
    expect(state.type).toBe('movie');
  });

  it('should set the current page', () => {
    const state = reducer(initialState, setCurrentPage(2));
    expect(state.pagination.currentPage).toBe(2);
  });

  it('should set the search term', () => {
    const state = reducer(initialState, setSearchTermFilter('world'));
    expect(state.searchTerm).toBe('world');
  });

  it('should set the sort filter', () => {
    const state = reducer(initialState, setSortFilter('title'));
    expect(state.sortBy).toBe('title');
  });

  it('should clear filters', () => {
    const state = reducer(initialState, clearFilters());
    expect(state).toEqual(initialState);
  });
});

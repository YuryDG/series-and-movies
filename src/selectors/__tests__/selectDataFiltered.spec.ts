import { RootState } from '../../app/store';
import { mockData2015, mockDataSeries, mockSeriesMovieData } from '../../mocks';
import { mockStateData } from '../../mocks'
import { selectDataFiltered } from '../selectDataFiltered'

let state: RootState;
describe('selectDataFiltered', () => {
  beforeEach(() => {
    state = JSON.parse(JSON.stringify(mockStateData)) as RootState
  })

  it('should return the same data', () => {
    expect(selectDataFiltered(mockStateData)).toEqual(mockSeriesMovieData);
  })

  it('should return data filtered by year', () => {
    state.filters.year = 2015
    expect(selectDataFiltered(state)).toEqual(mockData2015);
  })

  it('should return data filtered by type', () => {
    state.filters.type = 'series';
    expect(selectDataFiltered(state)).toEqual(mockDataSeries);
  })

  it('should return data filtered by searchTerm', () => {
    state.filters.searchTerm = 'wolf';
    expect(selectDataFiltered(state)).toEqual([mockDataSeries[0]]);
  })

  it('should return data filtered by type and year', () => {
    state.filters.type = 'series';
    state.filters.year = 2015;

    const expectResult = [mockData2015[0]];
    expect(selectDataFiltered(state)).toEqual(expectResult);
  })

  it('should return data filtered by type and year and searchTerm', () => {
    state.filters.type = 'series';
    state.filters.year = 2015;
    state.filters.searchTerm = 'Activity'

    const expectResult = [mockData2015[0]];
    expect(selectDataFiltered(state)).toEqual(expectResult);
  })
})

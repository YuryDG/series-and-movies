import { RootState } from '../../app/store';
import { mockData2015, mockData2016 } from '../../mocks';
import { mockStateData } from '../../mocks/mockStateData';
import { selectDataSorted } from '../selectDataSorted';

describe('selectDataSorted', () => {
  it('should return data without sorting', () => {
    expect(selectDataSorted(mockStateData))
      .toEqual(mockStateData.seriesAndMovies.data);
  })

  it('should return data sorted by title', () => {
    const state = JSON.parse(JSON.stringify(mockStateData)) as RootState
    state.filters.sortBy = 'title';
    const dataSortedByTitle = [
      mockData2015[1], mockData2016[1],
      mockData2015[0], mockData2016[0],
    ]
    expect(selectDataSorted(state)).toEqual(dataSortedByTitle);
  })
})

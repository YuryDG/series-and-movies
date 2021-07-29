import { RootState } from '../../app/store';
import { mockData2015 } from '../../mocks';
import { mockStateData } from '../../mocks/mockStateData';
import { selectDataPaginated } from '../selectDataPaginated';

describe('selectDataPaginated', () => {
  it('should return data paginated', () => {
    const state = JSON.parse(JSON.stringify(mockStateData)) as RootState
    state.filters.pagination.itemsPerPage = 2;
    state.filters.year = 2015;
    state.filters.sortBy = 'title';

    const resultData = [
      mockData2015[1], mockData2015[0]
    ]
    expect(selectDataPaginated(state)).toEqual(resultData);
  })
})

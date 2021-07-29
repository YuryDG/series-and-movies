import { RootState } from '../../app/store';
import { mockStateData } from '../../mocks/mockStateData'
import { selectorHasMoreData } from '../selectHasMorData'

describe('selectHasMorData', () => {
  it('should return false', () => {
    expect(selectorHasMoreData(mockStateData)).toBe(false);
  })

  it('should return true', () => {
    const state = JSON.parse(JSON.stringify(mockStateData)) as RootState
    state.filters.pagination.itemsPerPage = 1;
    expect(selectorHasMoreData(state)).toBe(true);
  })
})

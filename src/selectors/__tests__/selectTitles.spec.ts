import { mockStateData } from '../../mocks/mockStateData'
import { selectTitles } from '../selectTitles'

describe('selectTitles', () => {
  it('should select titles from data', () => {
    const expectTitles = [
      "Wolf Creek",
      "No Activity",
      "Billions",
      "Better Call Saul",
    ];
    expect(selectTitles(mockStateData)).toEqual(expectTitles);
  })
})

import { mockStateData } from '../../mocks/mockStateData'
import { selectYears } from '../selectYears'

describe('selectYears', () => {
  it('should select years from data', () => {
    expect(selectYears(mockStateData)).toEqual([2016, 2015]);
  })
})

import { getValidYears } from "../getValidsYears"

describe('getValidYears', () => {
  it('should remove duplicated elements', () => {
    expect(getValidYears([1, 2, 3, 1])).toEqual([1, 2, 3]);
  })
  it('should not remove elements', () => {
    expect(getValidYears([1, 2])).toEqual([1, 2]);
  })
})
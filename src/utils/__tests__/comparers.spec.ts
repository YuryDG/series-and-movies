import { mockDataMovies } from "../../mocks/mockDataMovies"
import { comparerByTitle, comparerByYear } from "../comparers"

describe('utils/comparers', () => {
  describe('comparerByTitle', () => {
    it('should return 1', () => {
      const response = comparerByTitle(mockDataMovies[0], mockDataMovies[1]);
      expect(response).toBe(1);
    })

    it('should return -1', () => {
      const response = comparerByTitle(mockDataMovies[1], mockDataMovies[0]);
      expect(response).toBe(-1);
    })
  })

  describe('comparerByYear', () => {
    it('should return 1', () => {
      const r = comparerByYear(mockDataMovies[0], mockDataMovies[1]);
      expect(r).toBe(1);
    })

    it('should return -1', () => {
      const r = comparerByYear(mockDataMovies[1], mockDataMovies[0]);
      expect(r).toBe(-1);
    })
  })
})
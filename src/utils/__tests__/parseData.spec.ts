import { mockApiResponse, mockSeriesMovieData } from "../../mocks"
import { convertToSerieOrMovie, parseSeriesAndMoviesData } from "../parseData"

describe('utils/parseData', () => {

  describe('convertToSerieOrMovie', () => {
    it('should convert data properly', () => {
      const expectedResult = {
        title: "Wolf Creek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        programType: "series",
        image: {
          url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
          width: 1000,
          height: 1500
        },
        releaseYear: 2016
      }
      expect(convertToSerieOrMovie(mockApiResponse[0])).toEqual(expectedResult)
    })
  })

  describe('parseSeriesAndMoviesData', () => {
    it('should convert data properly', () => {
      expect(parseSeriesAndMoviesData(mockApiResponse)).toEqual(mockSeriesMovieData)
    })
  })
})
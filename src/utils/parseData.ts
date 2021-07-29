import { Movie, Serie, SeriesAndMoviesData } from "../types";


export const convertToSerieOrMovie = (item: any): Movie | Serie => {
  const { description, releaseYear, title, programType, images } = item;
  return {
    title,
    image: { ...images['Poster Art'] },
    description,
    releaseYear,
    programType
  }
}

// parsing data to a better format
export const parseSeriesAndMoviesData = (data: SeriesAndMoviesData[]): (Movie | Serie)[] => {
  return data.map(convertToSerieOrMovie)
}
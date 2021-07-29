import { Movie, Serie } from "../types";

export const comparerByTitle = (a: Movie | Serie, b: Movie | Serie) => {
  return a.title.localeCompare(b.title);
}

export const comparerByYear = (a: Movie | Serie, b: Movie | Serie) => {
  return a.releaseYear - b.releaseYear
}

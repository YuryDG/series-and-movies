import { Movie, Serie } from "../types";

export const mockDataMovies: (Movie | Serie)[] = [
  {
    title: "Billions",
    description: "Billions Description",
    programType: "movie",
    image: {
      url: "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
      width: 720,
      height: 1080
    },
    releaseYear: 2016
  },
  {
    title: "Better Call Saul",
    description: "Better Call Saul Description",
    programType: "movie",
    image: {
      url: "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg",
      width: 1000,
      height: 1500
    },
    releaseYear: 2015
  },
]
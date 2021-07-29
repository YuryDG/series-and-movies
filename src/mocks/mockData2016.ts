import { Movie, Serie } from "../types";

export const mockData2016: (Movie | Serie)[] = [
  {
    title: "Wolf Creek",
    description: "Wolf Creek Description",
    programType: "series",
    image: {
      url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
      width: 1000,
      height: 1500
    },
    releaseYear: 2016
  },
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
]
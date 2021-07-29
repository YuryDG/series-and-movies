import { Movie, Serie } from "../types";

export const mockDataSeries: (Movie | Serie)[] = [
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
    title: "No Activity",
    description: "No Activity Description",
    programType: "series",
    image: {
      url: "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
      width: 1000,
      height: 1500
    },
    releaseYear: 2015
  }
]
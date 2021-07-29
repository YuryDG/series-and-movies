import { Movie, Serie } from "../types";

export const mockData2015: (Movie | Serie)[] = [
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
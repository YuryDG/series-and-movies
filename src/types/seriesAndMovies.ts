export type APIResponse = SeriesAndMoviesData[]

export type SeriesAndMoviesData = {
  title: string;
  programType: 'series' | 'movie';
  description: string;
  images: ProgramImage;
  releaseYear: number;
}

export type ProgramImage = {
  "Poster Art": {
    url: string;
    width: number;
    height: number;
  }
}

export type Program = Pick<SeriesAndMoviesData, 'title' | 'description' | 'releaseYear'> & {
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export type Movie = Program & {
  programType: 'movie'
}

export type Serie = Program & {
  programType: 'series'
}

export type SortFilter = '' | 'title' | 'year'
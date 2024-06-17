interface IGenres {
  [name: string]: string[];
}

export interface IMovieItem {
  id: number | null;
  name: string;
  alternativeName?: string;
  poster?: {
    url: string;
  };
  description: string;
  rating: {
    kp: number | null;
    imdb: number | null;
  };
  year: number | null;
  genres: IGenres[];
}

export interface ICardProps {
  docs: IMovieItem[];
}

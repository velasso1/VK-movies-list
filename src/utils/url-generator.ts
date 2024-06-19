import { MovieInformationState } from "../types/movie-information";

export const generateUrl = (
  state: MovieInformationState,
  page: string
): string => {
  let generalUrl: string = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50&type=movie`;

  const { toggleGenres, toggleRatings, toggleYears } = state;
  if (toggleGenres.length) {
    for (let i = 0; i < toggleGenres.length; i++) {
      generalUrl += `&genres.name=${toggleGenres[i]}`;
    }
  }

  if (toggleYears.length) {
    for (let i = 0; i < toggleYears.length; i++) {
      generalUrl += `&releaseYears.start=${toggleYears[i]}`;
    }
  }

  if (toggleRatings.length) {
    for (let i = 0; i < toggleRatings.length; i++) {
      generalUrl += `&rating.imdb=${toggleRatings[i]}`;
    }
  }

  return generalUrl;
};

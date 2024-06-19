import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index.ts";
import {
  MovieInformationState,
  InfromationItem,
} from "../../types/movie-information.ts";

const initialState: MovieInformationState = {
  years: [],
  genres: [],
  rating: [],
  toggleGenres: [],
  toggleRatings: [],
  toggleYears: [],
  page: "1",
};

const movieInformation = createSlice({
  name: "movieInformation",
  initialState,
  reducers: {
    receivedInformation(state, action: PayloadAction<InfromationItem[]>) {
      state.genres = action.payload;
    },
    toggleGenre(state, action: PayloadAction<string>) {
      if (state.toggleGenres.includes(action.payload)) {
        state.toggleGenres = state.toggleGenres.filter(
          (item) => item !== action.payload
        );
      } else {
        state.toggleGenres.push(action.payload);
      }
    },
    toggleYear(state, action: PayloadAction<string>) {
      if (state.toggleYears.includes(action.payload)) {
        state.toggleYears = state.toggleYears.filter(
          (item) => item !== action.payload
        );
      } else {
        state.toggleYears.push(action.payload);
      }
    },
    toggleRating(state, action: PayloadAction<string>) {
      if (state.toggleRatings.includes(action.payload)) {
        state.toggleRatings = state.toggleRatings.filter(
          (item) => item !== action.payload
        );
      } else {
        state.toggleRatings.push(action.payload);
      }
    },
    writePageToState(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
  },
});

// Actions

export const getGenres = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      await fetch(
        "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name",
        {
          method: "GET",
          headers: {
            "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      ).then((resp) =>
        resp.json().then((data) => dispatch(receivedInformation(data)))
      );
    } catch (error) {
      console.error(error);
    }
  };
};

// Helpers

// Function for generate url with filters
// export const generateUrl = (
//   state: MovieInformationState,
//   page: string
// ): string => {
//   let generalUrl: string = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50&type=movie`;

//   const { toggleGenres, toggleRatings, toggleYears } = state;
//   if (toggleGenres.length) {
//     for (let i = 0; i < toggleGenres.length; i++) {
//       generalUrl += `&genres.name=${toggleGenres[i]}`;
//     }
//   }

//   if (toggleYears.length) {
//     for (let i = 0; i < toggleYears.length; i++) {
//       generalUrl += `&releaseYears.start=${toggleYears[i]}`;
//     }
//   }

//   if (toggleRatings.length) {
//     for (let i = 0; i < toggleRatings.length; i++) {
//       generalUrl += `&rating.imdb=${toggleRatings[i]}`;
//     }
//   }

//   return generalUrl;
// };

export const {
  receivedInformation,
  toggleGenre,
  toggleYear,
  toggleRating,
  writePageToState,
} = movieInformation.actions;

export default movieInformation.reducer;

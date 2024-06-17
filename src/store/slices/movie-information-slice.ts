import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index.ts";
import { MovieInformationState, InfromationItem } from "../../types/movie-information.ts";

const initialState: MovieInformationState = {
    years: [],
    genres: [],
    rating: [],
    toggleGenres: [],
}

const movieInformation = createSlice({
  name: "movieInformation",
  initialState,
  reducers: {
    receivedInformation(state, action: PayloadAction<InfromationItem[]>) {
      state.genres = action.payload;
    },
    toggleGenre(state, action: PayloadAction<string>) {
      if (state.toggleGenres.includes(action.payload)) {
        state.toggleGenres = state.toggleGenres.filter((item) => item !== action.payload)
      } else {
        state.toggleGenres.push(action.payload);
      }      
    }
  }
})

// Actions

export const getGenres = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      await fetch("https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name", {
        method: "GET",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
        },
      }).then((resp) => resp.json().then((data) => dispatch(receivedInformation(data))))
      
    } catch (error) {
      console.error(error)
    }
  }
}



export const { receivedInformation, toggleGenre } = movieInformation.actions;
  
export default movieInformation.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index.ts";
import { ICardProps, IMovieItem } from "../../types/card-props.tsx";

type IStatus = "loadingData" | "dataReceived";

interface IMovieState {
  status: IStatus;
  movies: IMovieItem[];
  likedMovies: string[];
  currentMovie: IMovieItem;
  pages: number;
}

const initialState: IMovieState = {
  status: "dataReceived",
  movies: [],
  pages: 1,
  likedMovies: [],
  currentMovie: {
    id: null,
    name: "",
    alternativeName: "",
    poster: {
      url: "",
    },
    description: "",
    rating: {
      kp: null,
      imdb: null,
    },
    year: null,
    genres: [],
  },
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesReceived(state: IMovieState, action: PayloadAction<ICardProps>) {
      state.movies = action.payload.docs;
      state.pages = action.payload.pages;
    },
    oneMovieReceived(state: IMovieState, action: PayloadAction<IMovieItem>) {
      state.currentMovie = action.payload;
    },
    changeRequestStatus(state: IMovieState, action: PayloadAction<IStatus>) {
      state.status = action.payload;
    },
    // clearOnePicture(state: IPictureState) {
    //   state.currentPicture = initialState.currentPicture;
    // },
    // likePicture(state: IPictureState, action: PayloadAction<string>) {
    //   if (!state.likedMovies.includes(action.payload)) {
    //     state.likedMovies.push(action.payload);
    //   } else {
    //     state.likedMovies = state.likedMovies.filter(
    //       (item) => item !== action.payload
    //     );
    //   }
    // },
    // deleteCard(state: IPictureState, action: PayloadAction<string>) {
    //   state.movies = state.movies.filter((item) => item.id !== action.payload);
    // },
    // addNewPictures(
    //   state: IPictureState,
    //   action: PayloadAction<{ results: ICardProps[] }>
    // ) {
    //   state.movies.push(...action.payload.results);
    // },
  },
});

// .then((resp) => resp.json().then((data) => console.log(data);

// Actions

export const getMovies = (page: string, url: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(changeRequestStatus("loadingData"));
      await fetch(`${url}`, {
        method: "GET",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
        },
      }).then((resp) =>
        resp.json().then((data) => {
          dispatch(moviesReceived(data));
          dispatch(changeRequestStatus("dataReceived"));
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
};

// get one picture by id
export const getOneMovie = (id: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
        },
      }).then((resp) =>
        resp.json().then((data) => dispatch(oneMovieReceived(data)))
      );
    } catch (error) {
      console.error(error);
    }
  };
};

// export const getMorePictures = (count: number) => {
//   return async (dispatch: AppDispatch): Promise<void> => {
//     await fetch(
//       `https://api.unsplash.com/search/photos?query=nature&page=${count}&client_id=${
//         import.meta.env.VITE_API_KEY
//       }`
//     ).then((resp) =>
//       resp.json().then((data) => dispatch(addNewPictures(data)))
//     );
//   };
// };

export const {
  moviesReceived,
  oneMovieReceived,
  changeRequestStatus,
  // clearOnePicture,
  // likePicture,
  // deleteCard,
  // addNewPictures,
} = movies.actions;

export default movies.reducer;

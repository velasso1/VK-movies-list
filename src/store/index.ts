import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import pictures from "./slices/pictures-slice";

const rootReducer = combineReducers({ 
  pictures: pictures,
});
 
const resultConfigureStore = configureStore({
  reducer: rootReducer,
});

export default resultConfigureStore;

export type RootState = ReturnType<typeof resultConfigureStore.getState>; 
export type AppDispatch = typeof resultConfigureStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

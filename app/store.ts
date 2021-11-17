import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import resultsReducer from "../features/results/resultsSlice";
import currentDetailsReducer from "../features/currentDetails/currentDetailsSlice";

export const resultsStore = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

export const currentDetailsStore = configureStore({
  reducer: {
    currentDetails: currentDetailsReducer,
  },
});

export type ResultsDispatch = typeof resultsStore.dispatch;
export type CurrentDetailsDispatch = typeof currentDetailsStore.dispatch;
export type RootResultsState = ReturnType<typeof resultsStore.getState>;
export type RootCurrentDetailsState = ReturnType<
  typeof currentDetailsStore.getState
>;
export type ResultsThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootResultsState,
  unknown,
  Action<string>
>;
export type CurrentDetailsThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootCurrentDetailsState,
  unknown,
  Action<string>
>;

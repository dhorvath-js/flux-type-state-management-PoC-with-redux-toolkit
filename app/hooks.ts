import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ResultsStateStatus } from "../features/results/resultsSlice";
import type {
  CurrentDetailsDispatch,
  ResultsDispatch,
  RootCurrentDetailsState,
  RootResultsState,
} from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useResultsDispatch = () => useDispatch<ResultsDispatch>();
export const useResultsSelector: TypedUseSelectorHook<RootResultsState> =
  useSelector;

export const useCurrentDetailsDispatch = () =>
  useDispatch<CurrentDetailsDispatch>();
export const useCurrentDetailsSelector: TypedUseSelectorHook<RootCurrentDetailsState> =
  useSelector;

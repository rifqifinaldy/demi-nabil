import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const STATE_SELECTOR = (state: RootState) => state.someState;

export const STATE_SELECTOR_COLLECTION = createSelector(
  STATE_SELECTOR,
  (state) => state
);

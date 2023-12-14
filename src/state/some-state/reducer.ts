import { createReducer } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "./action";

export type TSomeState = {
  someStateData: object;
  pending: boolean;
  error: boolean;
  success: boolean;
};

const initialState: TSomeState = {
  someStateData: {},
  pending: false,
  error: false,
  success: false,
};

export const SOME_STATE_REDUCER = createReducer(initialState, (builder) => {
  builder
    // LOG IN REDUCER
    .addCase(REQUEST_STATE.pending, (state) => {
      state.pending = true;
    })
    .addCase(REQUEST_STATE.fulfilled, (state) => {
      state.pending = false;
      state.success = true;
    })
    .addCase(REQUEST_STATE.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

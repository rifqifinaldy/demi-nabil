import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { SOME_STATE_REDUCER } from "./some-state";

export const store = configureStore({
  reducer: {
    someState: SOME_STATE_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

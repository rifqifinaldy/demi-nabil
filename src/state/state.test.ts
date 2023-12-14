import { test, expect } from "vitest";
import { store } from "./store";
import { REQUEST_STATE } from "./some-state";

test("Should initially set someStateData to an empty object", () => {
  const state = store.getState().someState;
  expect(state.someStateData).toEqual({});
});

test("Should handle pending states", async () => {
  store.dispatch(REQUEST_STATE());

  const currentState = store.getState().someState;

  // Test pending state
  expect(currentState.pending).toBe(true);

  await new Promise((resolve) => setTimeout(resolve, 100)); 

  const successState = store.getState().someState;

  expect(successState.pending).toBe(false);

  store.dispatch(REQUEST_STATE());
  await new Promise((resolve) => setTimeout(resolve, 100));

  const errorState = store.getState().someState;

  // Test error state
  expect(errorState.pending).toBe(false);
});

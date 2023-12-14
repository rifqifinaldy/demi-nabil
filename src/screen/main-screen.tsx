import React, { useEffect } from "react";
import { REQUEST_STATE, STATE_SELECTOR_COLLECTION } from "../state/some-state";
import { useAppDispatch, useAppSelector } from "../state/redux-hook";

const MainScreen: React.FC = () => {
  const { success, pending, error } = useAppSelector(STATE_SELECTOR_COLLECTION);
  const dispatch = useAppDispatch();

  console.log("success", success);
  console.log("pending", pending);
  console.log("error", error);

  useEffect(() => {
    dispatch(REQUEST_STATE());
  }, [dispatch]);

  return <div>MainScreen</div>;
};

export default MainScreen;

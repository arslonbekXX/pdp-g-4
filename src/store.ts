import { configureStore } from "@reduxjs/toolkit";
import problems from "./redux/problemsReducer";

export const store = configureStore({
  reducer: {
    problems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

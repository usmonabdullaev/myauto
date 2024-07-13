import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data.ts";
import dealer from "./slices/dealer.ts";
import user from "./slices/user.ts";

export const store = configureStore({
  reducer: {
    data,
    dealer,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../api/AuthApi";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "../api/AuthApi";
import UserApi from "../api/UserApi";
import AuthReducer from "../features/AuthSlice/AuthSlice";
import ProductReducer from "../features/ProductSlice/ProductSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: AuthReducer,
    product: ProductReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, UserApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

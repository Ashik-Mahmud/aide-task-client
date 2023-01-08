import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
interface initialStateType {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
}

const initialState: initialStateType = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      cookies.set("aide", action.payload, { path: "/" });
      state.isAuthenticated = true;
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setCredentials: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess, setCredentials } = authSlice.actions;
export default authSlice.reducer;

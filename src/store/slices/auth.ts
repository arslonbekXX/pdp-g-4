import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
export interface AuthStore {
  email: string;
  accessToken: string;
}

const initialState: AuthStore = {
  email: "",
  accessToken: localStorage.getItem("accessToken") || "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(auth, action: PayloadAction<AuthStore>) {
      auth.email = action.payload.email;
      auth.accessToken = action.payload.accessToken;
    },
    logout(auth) {
      auth.email = "";
      auth.accessToken = "";
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;

// Selectors
export const getMe = (store: RootState) => store.auth;

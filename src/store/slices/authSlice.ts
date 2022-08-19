import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Auth } from "../../types";

const initialState = {
  id: "",
  email: "",
  expiry: 0,
  isAuthenticated: false,
  token: "",
} as Auth;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        id: action.payload.id,
        email: action.payload.email,
        isAuthenticated: true,
        token: uuidv4(),
        expiry: Date.now() + 7200000, // 2hours
      };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;


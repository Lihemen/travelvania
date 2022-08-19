import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const userSlice = createSlice({
  name: "user",
  initialState: [] as User[],
  reducers: {
    registerUser: (state, action) => {
      if (state.find((user) => user.email === action.payload.email)) {
        return state;
      }
      state.push(action.payload);
      return state;
    },
    deleteUser: (state, action) => {
      state = state.filter((user) => user.id !== action.payload);

      return state;
    },
  },
});

export const { registerUser } = userSlice.actions;

export const userReducer = userSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;

      return state;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

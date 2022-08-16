import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

export const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;

      return state;
    },
  },
});


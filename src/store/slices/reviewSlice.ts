import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Review } from "../../types";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: [] as Review[],
  reducers: {
    addReview: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
      return state;
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

import { Hotel } from "../../types";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: [] as Hotel[],
  reducers: {
    createHotel: (state, action) => {
      return [...state, action.payload];
    },
    deleteHotel: (state, action) => {
      state.filter((el) => el.id !== action.payload);
      return state;
    },
    updateHotel: (state, action) => {},
    getSingleHotel: (state, action) => {
      const hotel = state.filter((el) => el.id === action.payload);
      return hotel;
    },
  },
});

export const { createHotel, deleteHotel, updateHotel, getSingleHotel } =
  hotelSlice.actions;

export const hotelReducer = hotelSlice.reducer;


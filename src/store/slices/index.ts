import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./userSlice";
import { hotelReducer } from "./hotelSlice";

export const rootReducer = combineReducers({
  userReducer,
  hotelReducer,
});


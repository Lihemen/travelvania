import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./userSlice";
import { hotelReducer } from "./hotelSlice";
import { authReducer } from "./authSlice";
import { reviewReducer } from "./reviewSlice";

export const rootReducer = combineReducers({
  authReducer,
  hotelReducer,
  reviewReducer,
  userReducer,
});


import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UsersSlice";

export const store = configureStore({
  reducer: {
    Users: UserReducer,
  },
});

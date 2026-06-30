import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

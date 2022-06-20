import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featues/counter/counterSlice";
import postReducer from "./featues/post/postSlice";
import userReducer from "./featues/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer
  } 
})
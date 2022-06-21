import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featues/counter/counterSlice";
import postReducer from "./featues/post/postSlice";
import userReducer from "./featues/users/usersSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  } ,
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware)
})
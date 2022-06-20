import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featues/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  } 
})
// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoSlice";


export const reduxStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


 

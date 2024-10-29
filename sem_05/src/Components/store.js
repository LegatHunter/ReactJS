import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice.js";

export const store = configureStore({
reducer: {
counter: counterReducer,
},
});
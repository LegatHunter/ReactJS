import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducers/TodoListSlice.js";
import favoritesReducer from "../reducers/favoritesSlice .js";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    favList: favoritesReducer,
  },
});
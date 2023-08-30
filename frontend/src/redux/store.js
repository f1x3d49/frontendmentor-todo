import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import todosSlice from "./todosSlice";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    todos: todosSlice,
    filters: filtersSlice,
  },
});

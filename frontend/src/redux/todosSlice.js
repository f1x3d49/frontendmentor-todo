import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import { StatusFilters } from "./filtersSlice";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text, completed) => {
        const id = nanoid();
        return { payload: { id, text, completed } };
      },
    },
    removeTodo: (state, action) => {
      const todoIndex = action.payload;
      state.splice(todoIndex, 1);
    },
    toggleTodo: (state, action) => {
      const todoIndex = action.payload;
      const todo = state.filter((item) => state.indexOf(item) === todoIndex);
      todo[0].completed = !todo[0].completed;
    },
    allTodosCompleted: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.map((todo) => {
        todo.completed = true;
      });
    },
    completedTodoCleared: (state, action) => {
      const todoIndex = action.payload;
      // eslint-disable-next-line array-callback-return
      state.map((todo) => {
        if (todo.completed) {
          state.splice(todoIndex, 1);
        }
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  allTodosCompleted,
  completedTodoCleared,
} = todosSlice.actions;

export default todosSlice.reducer;

const Todos = (state) => state.todos;
const Filters = (state) => state.filters;

export const selectFilteredTodos = createSelector(
  Todos,
  Filters,
  (todos, filters) => {
    const { status } = filters;
    if (status === StatusFilters.All) {
      return todos;
    } else if (status === StatusFilters.Completed) {
      return todos.filter((todo) => todo.completed === true);
    } else if (status === StatusFilters.Active) {
      return todos.filter((todo) => todo.completed === false);
    }
  }
);

export const selectRemainingTodos = createSelector(Todos, (todos) => {
  return todos.filter((todo) => todo.completed === false);
});

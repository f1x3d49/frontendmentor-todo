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
      state = state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const todo = state[todoId];
      todo.completed = !todo.completed;
    },
    allTodosCompleted: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.map((todo) => {
        todo.completed = true;
      });
    },
    completedTodoCleared: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.map((todo) => {
        if (todo.completed) {
          delete state[todo.id];
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

export const selectFilteredTodos = createSelector(
  Todos,
  (state) => state.filters,
  (todos, filters) => {
    const { status } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    return todos.filter((todo) => {
      const statsuMatches =
        showAllCompletions || todo.completed === completedStatus;
      return statsuMatches;
    });
  }
);

export const selectFilteredTodoText = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.text)
);

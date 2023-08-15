import { createSlice } from "@reduxjs/toolkit";

// mock FrontendMentor State
const mockState = [
  { id: "0", title: "Compelete online Javascript Course" },
  { id: "1", title: "Jog arond the park 3x" },
  { id: "2", title: "10 minutes meditation" },
  { id: "3", title: "Read for 1 hour" },
  { id: "4", title: "Pick up grocceries" },
  { id: "5", title: "Complete to do app on Frontend" },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    all: mockState,
    active: mockState,
    completed: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.all.push({
        id: new Date().toISOString(),
        title: action.payload.title,
      });
    },

    eliminateTask: (state, action) => {
      state.all = state.all.filter((todo) => todo.id !== action.payload.id);
      state.active = state.active.filter(
        (todo) => todo.id !== action.payload.id
      );
    },

    toggleTask: (state, action) => {
      state.completed = state.all.filter(
        (todo) => todo.id === action.payload.id
      );
      state.active = state.active.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { eliminateTask, addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;

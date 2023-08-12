import { createSlice } from "@reduxjs/toolkit";

const mockState = [
  { id: "0", content: "Compelete online Javascript Course" },
  { id: "1", content: "Jog arond the park 3x" },
  { id: "2", content: "10 minutes meditation" },
  { id: "3", content: "Read for 1 hour" },
  { id: "4", content: "Pick up grocceries" },
  { id: "5", content: "Complete to do app on Frontend" },
];

export const allSlice = createSlice({
  name: "all",
  initialState: mockState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        content: action.payload.task,
      };
      state.push(newTask);
    },
    eliminateTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { eliminateTask, addTask } = allSlice.actions;

export default allSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", content: "Compelete online Javascript Course" },
  { id: "1", content: "Jog arond the park 3x" },
  { id: "2", content: "10 minutes meditation" },
  { id: "3", content: "Read for 1 hour" },
  { id: "4", content: "Pick up grocceries" },
  { id: "5", content: "Complete to do app on Frontend" },
];

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {
    eliminate: (state, action) => {
      if (action.payload > -1) {
        state.splice(action.payload, 1);
      }
    },
  },
});

export const { eliminate } = allSlice.actions;

export default allSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", content: "Compelete online Javascript Course" },
  { id: "2", content: "Jog arond the park 3x" },
  { id: "3", content: "10 minutes meditation" },
  { id: "4", content: "Read for 1 hour" },
  { id: "5", content: "Pick up grocceries" },
  { id: "6", content: "Complete to do app on Frontend" },
];

export const allSlice = createSlice({
  name: "all",
  initialState,
  reducers: {},
});

export default allSlice.reducer;

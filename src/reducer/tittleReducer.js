import { createSlice } from "@reduxjs/toolkit";

export const titleReducer = createSlice({
  name: "titleReducer",
  initialState: {
    title: "redux numberone",
  },
  // caculator sate
  reducers: {
    changeState: (state) => {
      console.log(state, "state");
      state.title = "state modify";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState } = titleReducer.actions;

export default titleReducer.reducer;

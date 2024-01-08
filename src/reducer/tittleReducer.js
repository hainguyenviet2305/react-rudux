import { createSlice } from "@reduxjs/toolkit";

export const titleReducerSimple = createSlice({
  name: "titleReducer",
  initialState: {
    title: "redux numberone",
    number: 1,
  },
  // caculator sate
  reducers: {
    changeState: (state) => {
      console.log(state, "state");
      state.title = "state modify";
    },
    changeTextWithIp : (state, actions) => {
      state.title = actions.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeState, changeTextWithIp } = titleReducerSimple.actions;

export default titleReducerSimple.reducer;

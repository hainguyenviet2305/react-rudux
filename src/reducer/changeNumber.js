import { createSlice } from "@reduxjs/toolkit";

export const numberReducer = createSlice({
  name: "numberReducer",
  initialState: {
    number: 1,
  },
  // caculator sate
  reducers: {
    changeNumber: (state) => {
      console.log(state, "state");
      state.number = 100;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  changeNumber } = numberReducer.actions;

export default numberReducer.reducer;

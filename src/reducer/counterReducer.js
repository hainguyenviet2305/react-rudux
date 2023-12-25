import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    title: "redux numberone",
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    changeState: (state) => {
        state.title = "state modify"
    }

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, changeState } = counterSlice.actions

export default counterSlice.reducer
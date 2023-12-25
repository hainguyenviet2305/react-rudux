import { configureStore as Store } from "@reduxjs/toolkit";
import counterSlice from '../src/reducer/counterReducer';
import  titleReducer from '../src/reducer/counterReducer';

export default Store({
  reducer: {
    counterSlice,
    titleReducer,
  },
});
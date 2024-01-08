import { configureStore as Store } from "@reduxjs/toolkit";
import titleReducerSimple from "../reducer/tittleReducer"
import numberReducer from "../reducer/changeNumber"
import RecallApiLoading from "../reducer/callApiReducer"

export default Store({
  reducer: {
    titleReducerSimple,
    numberReducer,
    RecallApiLoading,
  },
});
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/addCounterSlice";

const rootReducer = combineReducers({
    addCounter: counterReducer
})

export default rootReducer
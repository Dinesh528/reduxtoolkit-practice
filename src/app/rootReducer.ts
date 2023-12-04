import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/addCounterSlice";
import postJsonReducer from "./reducers/postJsonSlice";

const rootReducer = combineReducers({
    addCounter: counterReducer,
    postJson: postJsonReducer
})

export default rootReducer
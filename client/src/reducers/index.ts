import { combineReducers } from "redux";
import authReducer from "./auth";

const reducer = combineReducers({ authReducer });

export default reducer;
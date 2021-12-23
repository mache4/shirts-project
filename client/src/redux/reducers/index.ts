import { combineReducers } from "redux";
import authReducer from "./auth";
import ordersReducer from "./orders";
import cartItems from "./cartItems";

const reducer = combineReducers({ authReducer, ordersReducer, cartItems });

export default reducer;
import { combineReducers } from "redux";
import cartSlice from "./Cart/Cart";
import User from "./Reducers";

const RootReducer = combineReducers({
  users: User,
  cart: cartSlice,
});

export default RootReducer;

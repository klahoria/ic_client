import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./Reducer/Index";

const store = configureStore({
  reducer: RootReducer,
});

export default store;

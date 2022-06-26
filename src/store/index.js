import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducre/index";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(reducer, applyMiddleware(thunk));
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};

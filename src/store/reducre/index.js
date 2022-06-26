import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { Auth } from "./Auth/Auth";

const rootPersistConfig ={
  key: 'root',
  storage: storage,
}


const authPersistConfig ={
  key: 'auth',
  storage: storage,
}

const allReducres =  combineReducers({
  // auth: persistReducer(authPersistConfig,Auth),
  auth: Auth,

});


export default persistReducer(rootPersistConfig,allReducres)
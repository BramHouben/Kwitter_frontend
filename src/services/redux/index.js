import loggedIn from "services/redux/isLoggedIn";
// import currentUsername from "services/redux/currentUsername";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persist = {
  key: "root",
  storage,
  whitelist: ["loggedIn"],
};

const rootReducer = combineReducers({
  loggedIn: loggedIn,
});

export default persistReducer(persist, rootReducer);

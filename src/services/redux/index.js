import loggedIn from "services/redux/isLoggedIn";
// import currentUsername from "services/redux/currentUsername";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoggedIn: loggedIn,
});

export default rootReducer;

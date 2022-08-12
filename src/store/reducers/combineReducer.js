import { combineReducers } from "redux";
import authentication from "./reducer1";

export default combineReducers({
  authentication: authentication,
});

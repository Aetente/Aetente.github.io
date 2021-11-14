import { combineReducers } from "redux";
import users from "./users";
import comments from "./comments";
import ui from "./ui";

export default combineReducers({
  users,
  comments,
  ui,
});

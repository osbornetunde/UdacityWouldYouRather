import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import questionsReducer from "./questionsReducer";

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});

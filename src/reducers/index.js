import { combineReducers } from "redux";
import UserReducer from "./rootReducer";

const usersReducers = combineReducers({
  user: UserReducer,
});

export default usersReducers;
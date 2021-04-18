// import other reducers...
import authReducer from "./auth";
import tasksReducer from "./tasks";
import usersReducer from "./users";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  users: usersReducer,
});

export default rootReducer;

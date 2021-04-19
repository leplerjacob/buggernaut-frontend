// import other reducers...
import authReducer from "./auth";
import tasksReducer from "./tasks";
import usersReducer from "./users";
import projectsReducer from "./projects";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  users: usersReducer,
  projects: projectsReducer,
});

export default rootReducer;

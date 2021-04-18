// import other reducers...
import authReducer from "./auth";
import tasksReducer from "./tasks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ auth: authReducer, tasks: tasksReducer });

export default rootReducer;

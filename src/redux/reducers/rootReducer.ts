import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { taskReducer } from "./task/taskReducer";
export const rootReducer = combineReducers({
    taskReducer,
    authReducer
});
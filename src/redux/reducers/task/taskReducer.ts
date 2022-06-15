import { TaskAction, TaskState, TaskActionTypes } from "../../../types/task/taskTypes"
export const initialState = {
    tasks: [],
}
export const taskReducer = (state: TaskState = initialState, action: TaskAction) => {
    switch (action.type) {

        case TaskActionTypes.CREATE_TASK_SUCCESS:

            return { tasks: [...state.tasks, action.payload] }

        case TaskActionTypes.DELETE_TASK_SUCCESS:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };

        case TaskActionTypes.GET_TASK_SUCCESS:
            return { ...state, tasks: action.payload };

        default:
            return state;
    }
}

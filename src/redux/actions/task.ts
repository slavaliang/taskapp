import { TaskActionTypes } from "../../types/task/taskTypes"
export const createTask = (payload: string) => {
    return {
        type: TaskActionTypes.CREATE_TASK,
        payload
    }
}
export const deleteTask = (payload: string) => {
    return {
        type: TaskActionTypes.DELETE_TASK,
        payload
    }
}
export const getTask = () => {
    return {
        type: TaskActionTypes.GET_TASK,
    }
}
export const updateTask = (id: string, content: string) => {
    return {
        type: TaskActionTypes.UPDATE_TASK,
        payload: {
            id,
            content
        }
    }
}
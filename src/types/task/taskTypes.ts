export enum TaskActionTypes {
    CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
    CREATE_TASK = "CREATE_TASK",
    GET_TASK = "GET_TASK",
    GET_TASK_SUCCESS = "GET_TASK_SUCCESS",
    UPDATE_TASK = "UPDATE_TASK",
    UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
    DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
    DELETE_TASK = "DELETE_TASK",
}
export interface Task {
    id: string;
    name: string;
}
export interface ICreateTask {
    userId: string;
    name: string;
}
export interface TaskState {
    tasks: Task[];
}
export interface CreateAction {
    type: TaskActionTypes.CREATE_TASK_SUCCESS | TaskActionTypes.CREATE_TASK;
    payload: string;
}
export interface TaskReducer {
    taskReducer: TaskState;
}
export interface UpdateTask {
    name: string;
    id: string;
}
export interface DeleteAction {
    type: TaskActionTypes.DELETE_TASK_SUCCESS | TaskActionTypes.DELETE_TASK;
    payload: string
}
export interface GetAction {
    type: TaskActionTypes.GET_TASK_SUCCESS | TaskActionTypes.GET_TASK;
    payload?: TaskState
}
export interface UpdateAction {
    type: TaskActionTypes.UPDATE_TASK_SUCCESS | TaskActionTypes.UPDATE_TASK;
    payload: UpdateTask,
    id: string;
}
export type TaskAction = CreateAction | DeleteAction | GetAction | UpdateAction;
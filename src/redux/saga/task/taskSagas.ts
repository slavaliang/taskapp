import { CreateAction, DeleteAction, Task, TaskActionTypes, ICreateTask } from "../../../types/task/taskTypes";
import { call, Effect, put, takeEvery } from "redux-saga/effects"
import { TaskService } from "../../../api/task/TaskService"
function* sagaCreateTask(action: CreateAction): Generator<Effect, void> {
    try {
        const id = JSON.parse(localStorage.getItem('user')!).id;
        const taskObject: Partial<ICreateTask> = {
            userId: id,
            name: action.payload
        }
        const task = yield call(TaskService.createTask, taskObject);
        yield put({ type: TaskActionTypes.CREATE_TASK_SUCCESS, payload: task })
    } catch (error) {
        console.log('Error', error);
    }
}
function* sagaDeleteTask(action: DeleteAction): Generator<Effect, void> {
    try {
        yield call(TaskService.deleteTask, action.payload);
        yield put({ type: TaskActionTypes.DELETE_TASK_SUCCESS, payload: action.payload })
    } catch (error) {
        console.log('Error', error);
    }
}
function* sagaGetTask(): Generator<Effect, void, Task[]> {
    try {
        console.log()
        const tasks = yield call(TaskService.getTasks);
        yield put({ type: TaskActionTypes.GET_TASK_SUCCESS, payload: tasks })
    } catch (error) {
        console.log('Error', error);
    }
}
export function* sagaWatcherTasks(): Generator<Effect, void> {
    yield takeEvery(TaskActionTypes.CREATE_TASK, sagaCreateTask);
    yield takeEvery(TaskActionTypes.DELETE_TASK, sagaDeleteTask);
    yield takeEvery(TaskActionTypes.GET_TASK, sagaGetTask);
}
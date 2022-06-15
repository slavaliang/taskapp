import { all, Effect } from "redux-saga/effects";
import { sagaWatcherAuth } from "./auth/authSagas";
import { sagaWatcherTasks } from "./task/taskSagas";
export function* rootSagaWatcher(): Generator<Effect, void> {
    yield all([sagaWatcherTasks(), sagaWatcherAuth()]);
}
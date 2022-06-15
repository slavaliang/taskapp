import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { AuthService } from "../../../api/auth/AuthService";
import { Auth, AuthTaskActionTypes, CreateUser, LoginUser, UserRequest } from "../../../types/auth/authTypes";
function* sagaRegistration(action: CreateUser): Generator<Effect, void, Auth> {
    try {
        const userObject: UserRequest = {
            username: action.user.username,
            password: action.user.password
        }
        const user = yield call(AuthService.registration, userObject);
        localStorage.setItem('token', user.jwtToken);
        localStorage.setItem('user', JSON.stringify(user.user));
        yield put({ type: AuthTaskActionTypes.ISAUTH, isAuth: true })
    } catch (error) {
        console.log('Error', error);
    }
}
function* sagaLogin(action: LoginUser): Generator<Effect, void, Auth> {
    try {
        const userObject: UserRequest = {
            username: action.user.username,
            password: action.user.password
        }
        const user = yield call(AuthService.login, userObject);
        localStorage.setItem('token', user.jwtToken);
        localStorage.setItem('user', JSON.stringify(user.user));
        yield put({ type: AuthTaskActionTypes.ISAUTH, isAuth: true })
    } catch (error) {
        console.log('Error', error);
    }
}
function* sagaLogout(): Generator<Effect, void> {
    console.log('removet')
    localStorage.removeItem('token');
    console.log('removeu')
    localStorage.removeItem('user');
    yield put({ type: AuthTaskActionTypes.LOGOUT})
}
export function* sagaWatcherAuth(): Generator<Effect, void> {
    yield takeEvery(AuthTaskActionTypes.REGISTRATION, sagaRegistration);
    yield takeEvery(AuthTaskActionTypes.LOGIN, sagaLogin);
    yield takeEvery(AuthTaskActionTypes.LOGOUT, sagaLogout);
}
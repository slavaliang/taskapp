export enum AuthTaskActionTypes {

    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    REGISTRATION = "REGISTRATION",
    REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
    LOGOUT = "LOGOUT",
    ISAUTH = "ISAUTH"
}
export interface User {
    id: string;
    username: string;
    password: string;
}
export interface UserRequest {
    username: string;
    password: string;
}
export interface IsAuthenticationState {
    isAuth: boolean
}
export interface AuthReducer {
    authReducer: IsAuthenticationState;
}
export interface IsAuthAction {
    type: AuthTaskActionTypes.ISAUTH;
    isAuth: boolean;
}
export interface CreateUser {
    type: AuthTaskActionTypes.REGISTRATION_SUCCESS | AuthTaskActionTypes.REGISTRATION;
    user: User
}
export interface LoginUser {
    type: AuthTaskActionTypes.LOGIN_SUCCESS | AuthTaskActionTypes.LOGIN;
    user: User
}
export interface LoginUserAction {
    type: AuthTaskActionTypes.LOGIN_SUCCESS | AuthTaskActionTypes.LOGIN;
    user: User
}
export interface Login {
    login: string;
    password: string;
}
export interface Registration {
    login: string;
    password: string;
    repeat_password: string;
}
export interface Auth {
    user: User;
    jwtToken: string;
}
export interface RegistrationAction {
    type: AuthTaskActionTypes.REGISTRATION_SUCCESS | AuthTaskActionTypes.REGISTRATION;
    user: User
}
export interface LoginUserAction {
    type: AuthTaskActionTypes.LOGIN_SUCCESS | AuthTaskActionTypes.LOGIN;
    user: User
}
export type AuthAction = RegistrationAction | LoginUserAction;
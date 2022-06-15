import { AuthTaskActionTypes, User } from "../../types/auth/authTypes"
export const login = (payload: User) => {
    return {
        type: AuthTaskActionTypes.LOGIN,
        user: payload,
    }
}
export const registration = (payload: User) => {
    return {
        type: AuthTaskActionTypes.REGISTRATION,
        user: payload,
    }
}
export const logout = () => {
    return {
        type: AuthTaskActionTypes.LOGOUT,
    }
}
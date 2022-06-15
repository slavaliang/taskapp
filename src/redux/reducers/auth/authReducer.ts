import { AuthTaskActionTypes, IsAuthAction, IsAuthenticationState } from "../../../types/auth/authTypes";
const initialState = {
    isAuth: false
}
export const authReducer = (state: IsAuthenticationState = initialState, action: IsAuthAction) => {
    switch (action.type) {
        case (AuthTaskActionTypes.ISAUTH):
            return { isAuth: true };
        default:
            return state;
    }
}
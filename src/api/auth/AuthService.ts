import $api from "..";
import { UserRequest } from "../../types/auth/authTypes";
export class AuthService {
    static async login(user: UserRequest) {
        return (await $api.post('/auth', user)).data;
    }
    static async registration(user: UserRequest) {
        return (await $api.post('/reg', user)).data;
    }
}
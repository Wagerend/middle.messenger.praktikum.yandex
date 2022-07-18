import { http } from "../utils";

export class UserAPI {
    create(): void {
        
    }

    static getUser(): Promise<unknown> {
        return http.get('/user');
    }
}
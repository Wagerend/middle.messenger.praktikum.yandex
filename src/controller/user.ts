import { UserAPI } from "../api/user-api";
import store from "../servises/store/store";

class UserController {
    public getUser(){
        UserAPI.getUser().then(data=>store.set('user', data))
    }
}
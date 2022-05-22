import {Form, DefaultData as FormData} from './modules/form/form';
import {User, DefaultData as UserData} from './modules/user/user';
import {Error, DefaultData as ErrorData }from './modules/error/error';
import {Messenger}  from './modules/messenger/messenger';


const Routing = (() => {

    const getTemplate = function():any{
        let url = getPathName();
        switch(url){
            case '/':
                return Messenger.compile();
                break;
            case '/login':
                return new Form(FormData.login).render();
                break;
            case '/signin': 
                return new Form(FormData.signin).render();
                break;
            case '/user': 
                return new User(UserData.user).render();
                break;
            case '/edit': 
                return new User(UserData.editInfo).render();
                break;
            case '/editPassword': 
                return new User(UserData.editPassword).render();
                break;
            case '/500': 
                return new Error(ErrorData.serverError).render();
                break;
            default:
                return new Error(ErrorData.notFound).render();
                break;
        };
    };

    const getPathName = function(){
        return window.location.pathname;
    };

    return{
        getTemplate,
        getPathName,
    };
})();
const tag: HTMLElement | null = document.getElementById('TM');
if(tag !== null){
    tag.innerHTML = Routing.getTemplate();
}

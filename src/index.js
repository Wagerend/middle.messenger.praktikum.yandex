import Form, {DefaultData as FormData} from './modules/form/form';
import User, {DefaultData as UserData} from './modules/user/user';
import Error, {DefaultData as ErrorData }from './modules/error/error';
import Messenger  from './modules/messenger/messenger';


const Routing = (() => {

    const getTemplate = function(){
        let url = getPathName();
        switch(url){
            case '/': return Messenger.compile(); break;
            case '/login': return Form.set(FormData.login).compile(); break;
            case '/signin': return Form.set(FormData.signin).compile(); break;
            case '/user': return User.set(UserData.user).compile(); break;
            case '/edit': return User.set(UserData.editInfo).compile(); break;
            case '/editPassword': return User.set(UserData.editPassword).compile(); break;
            case '/500': return Error.set(ErrorData.serverError).compile(); break;
            default :return Error.set(ErrorData.notFound).compile(); break;
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

document.getElementById('TM').innerHTML = Routing.getTemplate();

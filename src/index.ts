import {Form, DefaultData as FormData} from './modules/form/form';
import {User, DefaultData as UserData} from './modules/user/user';
import {Error, DefaultData as ErrorData }from './modules/error/error';
import {Messenger}  from './modules/messenger/messenger';
import {router} from './servises/router/router';


router
    .use('/', Messenger, {})
    .use('/login', Form, FormData.login)
    .use('/signin', Form, FormData.signin)
    .use('/user', User, UserData.user)
    .use('/edit', User, UserData.editInfo)
    .use('/editPassword', User, UserData.editPassword)
    .use('/500', Error, ErrorData.serverError)
    .use('*', Error, ErrorData.notFound)
    .start();

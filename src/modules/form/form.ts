import Handlebars from 'handlebars';
import Template from './form.hbs';
import './form.scss';

import {Input} from './component/input/input';
import { Block } from '../../servises/block/block';
import { regular } from '../../servises/validator/validate';

Handlebars.registerPartial('login', Template);

type FormProps = {
    template: string,
    title: string,
    inputBlock: Record<string,string>,
    buttonTitle:string;
    link: Record<string,string>
};

export class Form extends Block{

    constructor(props: any){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}

export const DefaultData = (() => {

    let inputLogin = new Input({
        title:'Логин',
        type:'text',
        name:'login',
        events:{
            blur:function(){
                console.log(this)
                console.log(regular.login(this.value))
            }
        }
    });

    let inputPassword = new Input({
        title:'Пароль',
        type:'password',
        name:'password',
        events:{
            blur:function(){
                console.log(regular.password(this.value))
            }
        }
    });

    const login = {
        formId: 'form-login',
        template:'login',
        title:'Вход',
        buttonTitle:'Авторизоваться',
        link:{
            title:'Нет аккаунта?',
            href:'/signin',
        },
        inputLogin: inputLogin,
        inputPassword: inputPassword,
    };



    let inputEmail = new Input({
        title:'Почта',
        type:'text',
        name:'email',
        events:{
            blur:() => {console.log("email")}
        }
    });

    let inputFirstName = new Input({
        title:'Имя',
        type:'text',
        name:'first_name',
        events:{
            blur:() => {console.log("FirstName")}
        }
    });

    let inputSecondName = new Input({
        title:'Фамилия',
        type:'text',
        name:'second_name',
        events:{
            blur:() => {console.log("SecondName")}
        }
    });

    let inputPhone = new Input({
        title:'Телефон',
        type:'text',
        name:'phone',
        events:{
            blur:() => {console.log("Phone")}
        }
    });

    let inputComplitePassword = new Input({
        title:'Пароль (ещё раз)',
        type:'password',
        name:'',
        events:{
            blur:() => {console.log("ComplitePassword")}
        }
    });


    const signin = {
        formId:'form-registration',
        template:'signin',
        title:'Регистрация',
        buttonTitle:'Зарегистрироваться',
        link:{
            title:'Войти',
            href:'/login',
        },
        inputEmail: inputEmail,
        inputLogin: inputLogin,
        inputFirstName: inputFirstName,
        inputSecondName: inputSecondName,
        inputPhone: inputPhone,
        inputPassword: inputPassword,
        inputComplitePassword: inputComplitePassword,
    };

    return{
        login,
        signin,
    };

})();

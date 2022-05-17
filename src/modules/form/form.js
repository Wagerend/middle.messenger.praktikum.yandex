import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./form.hbs';
import './form.scss';

import {Input} from './component/input/input';

Handlebars.registerPartial('login', tmpl);

export const Form = (() => {

    let data = {}

    const set = function(context){
        data = context;
        return this;
    };

    const compile = function(){
        return Handlebars.compile(tmpl)(data);
    };

    return{
        set,
        compile,
    };

})();

export const DefaultData = (() => {

    let inputLogin = Input.set({
        title:'Логин',
        type:'text',
        name:'login',
    }).compile();

    let inputPassword = Input.set({
        title:'Пароль',
        type:'password',
        name:'password',
    }).compile();

    const login = {
        template:'login',
        title:'Вход',
        inputBlock:{
            inputLogin: inputLogin,
            inputPassword: inputPassword,
        },
        buttonTitle:'Авторизоваться',
        link:{
            title:'Нет аккаунта?',
            href:'/signin',
        },
    };



    let inputEmail = Input.set({
        title:'Почта',
        type:'text',
        name:'email',
    }).compile();

    let inputFirstName = Input.set({
        title:'Имя',
        type:'text',
        name:'first_name',
    }).compile();

    let inputSecondName = Input.set({
        title:'Фамилия',
        type:'text',
        name:'second_name',
    }).compile();

    let inputPhone = Input.set({
        title:'Телефон',
        type:'text',
        name:'phone',
    }).compile();

    let inputComplitePassword = Input.set({
        title:'Пароль (ещё раз)',
        type:'password',
        name:'',
    }).compile();


    const signin = {
        template:'signin',
        title:'Регистрация',
        inputBlock:{
            inputEmail: inputEmail,
            inputLogin: inputLogin,
            inputFirstName: inputFirstName,
            inputSecondName: inputSecondName,
            inputPhone: inputPhone,
            inputPassword: inputPassword,
            inputComplitePassword: inputComplitePassword,
        },
        buttonTitle:'Зарегистрироваться',
        link:{
            title:'Войти',
            href:'/login',
        },
    };

    return{
        login,
        signin,
    };

})();

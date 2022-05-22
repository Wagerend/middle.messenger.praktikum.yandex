import Handlebars from 'handlebars';
import Template from './form.hbs';
import './form.scss';

import {Input} from './component/input/input';
import { Block } from '../../servises/block/block';

Handlebars.registerPartial('login', Template);

type FormProps = {
    template: string,
    title: string,
    inputBlock: Record<string,string>,
    buttonTitle:string;
    link: Record<string,string>
};

export class Form extends Block{

    constructor(props: FormProps){
        super('div', props);
    }

    render(): string {
        return Template(this.props);
    }

}

export const DefaultData = (() => {

    let inputLogin = new Input({
        title:'Логин',
        type:'text',
        name:'login',
    }).render();

    let inputPassword = new Input({
        title:'Пароль',
        type:'password',
        name:'password',
    }).render();

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



    let inputEmail = new Input({
        title:'Почта',
        type:'text',
        name:'email',
    }).render();

    let inputFirstName = new Input({
        title:'Имя',
        type:'text',
        name:'first_name',
    }).render();

    let inputSecondName = new Input({
        title:'Фамилия',
        type:'text',
        name:'second_name',
    }).render();

    let inputPhone = new Input({
        title:'Телефон',
        type:'text',
        name:'phone',
    }).render();

    let inputComplitePassword = new Input({
        title:'Пароль (ещё раз)',
        type:'password',
        name:'',
    }).render();


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

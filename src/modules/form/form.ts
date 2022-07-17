import Handlebars from 'handlebars';
import Template from './form.hbs';
import './form.scss';

import { Input, Button } from './component';
import { Link } from '../component';

import { Block } from '../../servises/block/block';
import { regular } from '../../servises/validator/validate';
import { compileString } from 'sass';
import { router } from '../../servises/router/router';

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
        error:'Некорректно введен логин',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.login(this.value) || this.value === '');
                }
            }
        }
    });

    let inputPassword = new Input({
        title:'Пароль',
        type:'password',
        name:'password',
        error:'Некорректно введен пароль',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.password(this.value) || this.value === '');
                }
            }
        }
    });

    const login = {
        formId: 'form-login',
        template:'login',
        title:'Вход',
        button: new Button({
            title:'Авторизоваться',
            events:{
                click: function(){
                    const form = document.getElementById('form-login') as HTMLFormElement;
                    if(form !== null){
                        const data = new FormData(form);
                        const dataForm = {
                            login: data.get('login'),
                            password: data.get('password')
                        }
                        console.log(dataForm)
                    }
                }
            }
        }),
        link: new Link({
            class:'link-item',
            text:'Нет аккаунта?',
            events:{
                click: function(){
                    router.go('/signin');
                }
            }
        }),
        inputLogin: inputLogin,
        inputPassword: inputPassword,
    };

    let inputSignLogin = new Input({
        title:'Логин',
        type:'text',
        name:'login',
        error:'Некорректно введен логин',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.login(this.value) || this.value === '');
                }
            }
        }
    });

    let inputSignPassword = new Input({
        title:'Пароль',
        type:'password',
        name:'password',
        error:'Некорректно введен пароль',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.password(this.value) || this.value === '');
                }
            }
        }
    });

    let inputEmail = new Input({
        title:'Почта',
        type:'text',
        name:'email',
        error:'Некорректно введена почта',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.email(this.value) || this.value === '');
                }
            }
        }
    });

    let inputFirstName = new Input({
        title:'Имя',
        type:'text',
        name:'first_name',
        error:'Некорректно введено имя',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.fullName(this.value) || this.value === '');
                }
            }
        }
    });

    let inputSecondName = new Input({
        title:'Фамилия',
        type:'text',
        name:'second_name',
        error:'Некорректно введена фамилия',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.fullName(this.value) || this.value === '');
                }
            }
        }
    });

    let inputPhone = new Input({
        title:'Телефон',
        type:'text',
        name:'phone',
        error:'Некорректно введен телефон',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                if(error){
                    error.hidden = (regular.phone(this.value) || this.value === '');
                }
            }
        }
    });

    let inputComplitePassword = new Input({
        title:'Пароль (ещё раз)',
        type:'password',
        name:'password_complite',
        error:'Пароли не совпадают',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.ig-error');
                const form = document.getElementById('form-registration') as HTMLFormElement;
                if(error && form){
                    const data = new FormData(form);
                    const password = data.get('password') as string;
                    error.hidden = (regular.complitePassword(this.value, password) || this.value === '');
                }
            }
        }
    });


    const signin = {
        formId:'form-registration',
        template:'signin',
        title:'Регистрация',
        button: new Button({
            title:'Зарегистрироваться',
            events:{
                click: function(){
                    const form = document.getElementById('form-registration') as HTMLFormElement;
                    if(form !== null){
                        const data = new FormData(form);
                        const dataForm = {
                            email: data.get('email'),
                            login: data.get('login'),
                            firstName: data.get('first_name'),
                            secondName: data.get('second_name'),
                            phone: data.get('phone'),
                            password: data.get('password'),
                        }
                        console.log(dataForm)
                    }
                }
            }
        }),
        link: new Link({
            class:'link-item',
            text:'Войти',
            events:{
                click: function(){
                    router.go('/login');
                }
            }
        }),
        inputEmail: inputEmail,
        inputLogin: inputSignLogin,
        inputFirstName: inputFirstName,
        inputSecondName: inputSecondName,
        inputPhone: inputPhone,
        inputPassword: inputSignPassword,
        inputComplitePassword: inputComplitePassword,
    };

    return{
        login,
        signin,
    };

})();

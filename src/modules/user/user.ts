import Handlebars from 'handlebars';
import Template from './user.hbs';
import './user.scss';

import { Line, Input, Button } from './component';

import { Block } from '../../servises/block/block';
import { regular } from '../../servises/validator/validate';
import { Link } from '../component';
import { router } from '../../servises/router/router';

const Avatar = require('./../../icon/Union.svg') as string;

Handlebars.registerPartial('user', Template);

export class User extends Block{

    constructor(props: any){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}

type UserProps = {
    nickName: string,
    info?: Record<string, string>,
    input?: Record<string, string>,
    save: boolean,
    links?: Array<link>,
}

type link = {
    link: string,
    text: string,
    class?: string,
}

export const DefaultData = (() => {
    let inputEmail = new Input({
        title:'Почта',
        type:'text',
        name:'email',
        error:'Некорректно введена почта',
        value:'pochta@russia.ru',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                if(error){
                    error.hidden = (regular.email(this.value) || this.value === '');
                }
            }
        }
    });

    let inputLogin = new Input({
        title:'Логин',
        type:'text',
        name:'login',
        error: 'Некорректно введен логин',
        value:'IvanIvanov',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                if(error){
                    error.hidden = (regular.login(this.value) || this.value === '');
                }
            }
        }
    });

    let inputFirstName = new Input({
        title:'Имя',
        type:'text',
        name:'first_name',
        error:'Некорректно введено имя',
        value:'Иван',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
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
        value:'Иванов',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                if(error){
                    error.hidden = (regular.fullName(this.value) || this.value === '');
                }
            }
        }
    });

    let inputNickName = new Input({
        title:'Имя в чате',
        type:'text',
        name:'display_name',
        value:'Иван',
    });

    let inputPhone = new Input({
        title:'Телефон',
        type:'text',
        name:'phone',
        error:'Некорректно введен телефон',
        value:'8 (800) 555 35 35',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                if(error){
                    error.hidden = (regular.phone(this.value) || this.value === '');
                }
            }
        }
    });

    let editInfo = {
        nickName:'Иван',
        avatar:Avatar,
        idForm:'edit-info',
        inputEmail: inputEmail,
        inputLogin: inputLogin,
        inputFirstName: inputFirstName,
        inputSecondName: inputSecondName,
        inputNickName: inputNickName,
        inputPhone: inputPhone,
        buttonSave: new Button({
            events:{
                click:function(){
                    const form = document.getElementById('edit-info') as HTMLFormElement;
                    if(form !== null){
                        const data = new FormData(form);
                        const dataForm = {
                            email: data.get('email'),
                            login: data.get('login'),
                            firstName: data.get('first_name'),
                            secondName: data.get('second_name'),
                            displayName: data.get('display_name'),
                            phone: data.get('phone'),
                        };
                        console.log(dataForm);
                    }
                }
            }
        }),
    };

    let oldPassword = new Input({
        title:'Старый пароль',
        type:'password',
        name:'oldPassword',
        value:'',
    });

    let newPassword = new Input({
        title:'Новый пароль',
        type:'password',
        name:'newPassword',
        error:'Некорректно введен пароль',
        value:'',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                if(error){
                    error.hidden = (regular.password(this.value) || this.value === '');
                }
            }
        }
    });

    let confirmPassword = new Input({
        title:'Повторите новый пароль',
        type:'password',
        name:'complitePassword',
        error:'Пароли не совпадают',
        value:'',
        events:{
            blur:function(){
                const error = this.parentNode.querySelector('.info-error');
                const form = document.getElementById('edit-password') as HTMLFormElement;
                if(error && form){
                    const data = new FormData(form);
                    const password = data.get('newPassword') as string;
                    console.log(this.value, password)
                    error.hidden = (regular.complitePassword(this.value, password) || this.value === '');
                }
            }
        }
    })

    let editPassword = {
        nickName:'Иван',
        avatar:Avatar,
        idForm:'edit-password',
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
        buttonSave: new Button({
            events:{
                click:function(){
                    const form = document.getElementById('edit-password') as HTMLFormElement;
                    if(form !== null){
                        const data = new FormData(form);
                        const dataForm = {
                            oldPassword: data.get('oldPassword'),
                            newPassword: data.get('newPassword'),
                            complitePassword: data.get('complitePassword'),
                        };
                        console.log(dataForm);
                    }
                }
            }
        }),
        
    }

    let lineEmail = new Line({
        title:'Почта',
        name:'pochta@russia.ru',
    });

    let lineLogin = new Line({
        title:'Логин',
        name:'IvanIvanov',
    });

    let lineFirstName = new Line({
        title:'Имя',
        name:'Иван',
    });

    let lineSecondName = new Line({
        title:'Фамилия',
        name:'Иванов',
    });

    let lineNickName = new Line({
        title:'Имя в чате',
        name:'Иван',
    });

    let linePhone = new Line({
        title:'Телефон',
        name:'8 (800) 555 35 35',
    });

    let user = {
        nickName:'Иван',
        avatar:Avatar,
        lineEmail: lineEmail,
        lineLogin: lineLogin,
        lineFirstName: lineFirstName,
        lineSecondName: lineSecondName,
        lineNickName: lineNickName,
        linePhone:linePhone,
        linkFlag:true,
        linkEditInfo:new Link({
            class:'user-edit-text',
            text:'Изменить данные',
            events:{
                click:function(){
                    router.go('/edit');
                }
            }
        }),
        linkEditPassword:new Link({
            class:'user-edit-text',
            text:'Изменить пароль',
            events:{
                click:function(){
                    router.go('/editPassword');
                }
            }
        }),
        linkLeave:new Link({
            class:'user-edit-text red',
            text:'Выйти',
            events:{
                click:function(){
                    router.go('/login');
                }
            }
        })
    };

    return{
        user,
        editInfo,
        editPassword,
    };

})();

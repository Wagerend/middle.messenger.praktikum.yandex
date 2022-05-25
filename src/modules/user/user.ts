import Handlebars from 'handlebars';
import Template from './user.hbs';
import './user.scss';

import { Line } from './component/line/line';
import { Input } from './component/input/input';
import { Block } from '../../servises/block/block';

Handlebars.registerPartial('user', Template);

export class User extends Block{

    constructor(props: UserProps){
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
    let editInfo = {
        nickName:'Иван',
        input:{
            email: new Input({
                title:'Почта',
                type:'text',
                name:'email',
                value:'pochta@russia.ru',
            }),
            login: new Input({
                title:'Логин',
                type:'text',
                name:'login',
                value:'IvanIvanov',
            }),
            firstName: new Input({
                title:'Имя',
                type:'text',
                name:'first_name',
                value:'Иван',
            }),
            secondName: new Input({
                title:'Фамилия',
                type:'text',
                name:'second_name',
                value:'Иванов',
            }),
            nickName: new Input({
                title:'Имя в чате',
                type:'text',
                name:'display_name',
                value:'Иван',
            }),
            phone: new Input({
                title:'Телефон',
                type:'text',
                name:'phone',
                value:'8 (800) 555 35 35',
            }),
        },
        save: true,
    };

    let editPassword ={
        nickName:'Иван',
        input:{
            oldPassword: new Input({
                title:'Старый пароль',
                type:'password',
                name:'oldPassword',
                value:'',
            }),
            newPassword: new Input({
                title:'Новый пароль',
                type:'password',
                name:'newPassword',
                value:'',
            }),
            confirmPassword: new Input({
                title:'Повторите новый пароль',
                type:'password',
                name:'',
                value:'',
            }),
        },
        save: true,
    }

    let user = {
        nickName:'Иван',
        info:{
            email: new Line({
                title:'Почта',
                name:'pochta@russia.ru',
            }),
            login: new Line({
                title:'Логин',
                name:'IvanIvanov',
            }),
            firstName: new Line({
                title:'Имя',
                name:'Иван',
            }),
            secondName: new Line({
                title:'Фамилия',
                name:'Иванов',
            }),
            nickName: new Line({
                title:'Имя в чате',
                name:'Иван',
            }),
            Phone: new Line({
                title:'Телефон',
                name:'8 (800) 555 35 35',
            }),
        },
        links:[{
            link: '/edit',
            text: 'Изменить данные',
        },{
            link: '/editPassword',
            text: 'Изменить пароль',
        },{
            link: '/login',
            text: 'Выйти',
            class: 'red',
        }],
        save: false,
    };

    return{
        user,
        editInfo,
        editPassword,
    };

})();

import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./user.hbs';
import './user.scss';

import {Line} from './component/line/line';
import {Input} from './component/input/input';

Handlebars.registerPartial('user', tmpl);

export const User = (() => {

    let data = {};

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
    let editInfo = {
        nickName:'Иван',
        input:{
            email:Input.set({
                title:'Почта',
                type:'text',
                name:'email',
                value:'pochta@russia.ru',
            }).compile(),
            login:Input.set({
                title:'Логин',
                type:'text',
                name:'login',
                value:'IvanIvanov',
            }).compile(),
            firstName:Input.set({
                title:'Имя',
                type:'text',
                name:'first_name',
                value:'Иван',
            }).compile(),
            secondName:Input.set({
                title:'Фамилия',
                type:'text',
                name:'second_name',
                value:'Иванов',
            }).compile(),
            nickName:Input.set({
                title:'Имя в чате',
                type:'text',
                name:'display_name',
                value:'Иван',
            }).compile(),
            phone:Input.set({
                title:'Телефон',
                type:'text',
                name:'phone',
                value:'8 (800) 555 35 35',
            }).compile(),
        },
        save: true,
    };

    let editPassword ={
        nickName:'Иван',
        input:{
            oldPassword:Input.set({
                title:'Старый пароль',
                type:'password',
                name:'oldPassword',
                value:'',
            }).compile(),
            newPassword:Input.set({
                title:'Новый пароль',
                type:'password',
                name:'newPassword',
                value:'',
            }).compile(),
            confirmPassword:Input.set({
                title:'Повторите новый пароль',
                type:'password',
                name:'',
                value:'',
            }).compile(),
        },
        save: true,
    }

    let user = {
        nickName:'Иван',
        info:{
            email:Line.set({
                title:'Почта',
                name:'pochta@russia.ru',
            }).compile(),
            login:Line.set({
                title:'Логин',
                name:'IvanIvanov',
            }).compile(),
            firstName:Line.set({
                title:'Имя',
                name:'Иван',
            }).compile(),
            secondName:Line.set({
                title:'Фамилия',
                name:'Иванов',
            }).compile(),
            nickName:Line.set({
                title:'Имя в чате',
                name:'Иван',
            }).compile(),
            Phone:Line.set({
                title:'Телефон',
                name:'8 (800) 555 35 35',
            }).compile(),
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

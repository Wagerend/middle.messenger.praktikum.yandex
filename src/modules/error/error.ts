import Handlebars from 'handlebars';
import Template from './error.hbs';
import './error.scss';

Handlebars.registerPartial('error', Template);

export const Error = (() => {

    let data = {};

    const set = function(context){
        data = context;
        return this;
    };

    const compile = function(){
        return Template(data);
    };

    return{
        set,
        compile,
    };

})();

export const DefaultData = (() => {
    
    let notFound = {
        code:'404',
        text:'Не туда попали',
    };

    let serverError = {
        code:'500',
        text:'Мы уже фиксим',
    };

    return{
        notFound,
        serverError,
    };

})();


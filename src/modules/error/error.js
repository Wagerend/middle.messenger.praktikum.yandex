import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./error.hbs';
import './error.scss';

Handlebars.registerPartial('error', tmpl);

export const Error = (() => {

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


import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./input.hbs';
import './input.scss';

Handlebars.registerPartial('user-info-input', tmpl);

export const Input = (() => {

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
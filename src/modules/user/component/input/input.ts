import Handlebars from 'handlebars';
import Template from './input.hbs';
import './input.scss';

Handlebars.registerPartial('user-info-input', Template);

export const Input = (() => {

    let data = {}

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
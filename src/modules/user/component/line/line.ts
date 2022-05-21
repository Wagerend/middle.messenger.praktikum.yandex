import Handlebars from 'handlebars';
import Template from './line.hbs';
import './line.scss';

Handlebars.registerPartial('user-info-line', Template);

export const Line = (() => {

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
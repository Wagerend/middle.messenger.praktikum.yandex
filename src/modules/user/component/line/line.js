import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./line.hbs';
import './line.scss';

Handlebars.registerPartial('user-info-line', tmpl);

export const Line = (() => {

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
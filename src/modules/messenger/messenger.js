import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./messenger.hbs';
import './messenger.scss';

Handlebars.registerPartial('messenger', tmpl);

export const Messenger = (() => {

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
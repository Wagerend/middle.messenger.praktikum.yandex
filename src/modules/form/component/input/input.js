import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./input.hbs';
import './input.scss';

Handlebars.registerPartial('form-input',tmpl);

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ig-item').forEach(function(item){
        item.onkeyup = function(){
            let title = this.parentNode.querySelector('.ig-title');
            if(this.value != '')
                title.hidden = false;
            else
                title.hidden = true;
        };
    });
});

export default (()=>{

    let data = {};

    const set = function(context){
        data = context;
        return this;
    };

    const compile = function(){
        return Handlebars.compile(tmpl)(data);
    };

    return{
        compile,
        set,
    };
    
})();
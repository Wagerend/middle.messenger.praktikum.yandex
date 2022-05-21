import Handlebars from 'handlebars';
import Template from './input.hbs';
import './input.scss';

Handlebars.registerPartial('form-input', Template);

document.addEventListener('DOMContentLoaded', function(){
    const tag = document.querySelectorAll('.ig-item');

    if(!tag){
        return;
    };

    tag.forEach(function(item: any){
        item.onkeyup = function(){
            let title = this.parentNode.querySelector('.ig-title');
            if(this.value != '')
                title.hidden = false;
            else
                title.hidden = true;
        };
    });
});

export const Input = (()=>{

    let data = {};

    const set = function(context){
        data = context;
        return this;
    };

    const compile = function(){
        return Template(data);
    };

    return{
        compile,
        set,
    };
    
})();
import Handlebars from 'handlebars';
import { Block } from '../../../../servises/block/block';
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

type InputProps ={
    title: string;
    type: string;
    name: string;
    error: string;
    events?: Record<string,Function>;
}

export class Input extends Block{

    constructor(props: InputProps){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}

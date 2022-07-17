import Handlebars from 'handlebars';
import { Block } from '../../servises/block/block';
import { regular } from '../../servises/validator/validate';
import { Button } from './component';
import Template from './messenger.hbs';
import './messenger.scss';

Handlebars.registerPartial('messenger', Template);

export class Messenger extends Block{

    constructor(props: any){
        super('div', {
            ...props,
            Button: new Button({
                events:{
                    click: function(){
                        const input = document.getElementById('Message-input') as HTMLInputElement;
                        if(input !== null && regular.message(input.value)){
                            console.log(input.value);
                            input.value = '';
                        }
                    }
                }
            })
        });
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}
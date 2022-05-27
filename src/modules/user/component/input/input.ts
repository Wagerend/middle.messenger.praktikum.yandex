import Handlebars from 'handlebars';
import { Block } from '../../../../servises/block/block';
import Template from './input.hbs';
import './input.scss';

Handlebars.registerPartial('user-info-input', Template);

type InputProps ={
    title: string;
    type: string;
    name: string;
    value: string;
    error?: string;
    events?: any;
}

export class Input extends Block{

    constructor(props: InputProps){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}
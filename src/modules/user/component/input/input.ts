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
}

export class Input extends Block{

    constructor(props: InputProps){
        super('div', props);
    }

    render(): string {
        return Template(this.props);
    }

}
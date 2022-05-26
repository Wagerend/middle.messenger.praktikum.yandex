import Handlebars from 'handlebars';
import { Block } from '../../../../servises/block/block';
import Template from './button.hbs';
import './button.scss';

type ButtonProps ={
    title: string;
    events?: Record<string,Function>;
}

export class Button extends Block{

    constructor(props: ButtonProps){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}

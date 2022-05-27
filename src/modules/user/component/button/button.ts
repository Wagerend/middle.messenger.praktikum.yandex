import Handlebars from 'handlebars';
import { Block } from "../../../../servises/block/block";
import Template from './button.hbs';
import './button.scss';

export class Button extends Block{

    constructor(props: any){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}
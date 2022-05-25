import Handlebars from 'handlebars';
import { Block } from '../../servises/block/block';
import Template from './messenger.hbs';
import './messenger.scss';

Handlebars.registerPartial('messenger', Template);

export class Messenger extends Block{

    constructor(props: any){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template, this.props);
    }

}
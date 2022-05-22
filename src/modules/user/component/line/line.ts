import Handlebars from 'handlebars';
import { Block } from '../../../../servises/block/block';
import Template from './line.hbs';
import './line.scss';

Handlebars.registerPartial('user-info-line', Template);

type LineProps ={
    title: string,
    name: string,
}

export class Line extends Block{

    constructor(props: LineProps){
        super('div', props);
    }

    render(): string {
        return Template(this.props);
    }

}
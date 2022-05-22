import Handlebars from 'handlebars';
import { Block } from '../../servises/block/block';
import Template from './error.hbs';
import './error.scss';

Handlebars.registerPartial('error', Template);

type ErrorProps = {
    code:string;
    text:string;
}

export class Error extends Block{

    constructor(props: ErrorProps){
        super('div', props);
    }

    render(): string {
        return Template(this.props);
    }

}

export const DefaultData = (() => {
    
    let notFound = {
        code:'404',
        text:'Не туда попали',
    };

    let serverError = {
        code:'500',
        text:'Мы уже фиксим',
    };

    return{
        notFound,
        serverError,
    };

})();


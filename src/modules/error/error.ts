import Handlebars from 'handlebars';
import { Block } from '../../servises/block/block';
import { Link } from '../component';
import Template from './error.hbs';
import './error.scss';

import { router } from './../../servises/router/router';

Handlebars.registerPartial('error', Template);

type ErrorProps = {
    code:string;
    text:string;
}

export class Error extends Block{

    constructor(props: ErrorProps){
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(Template,this.props);
    }

}

export const DefaultData = (() => {
    
    let notFound = {
        code:'404',
        text:'Не туда попали',
        link: new Link({
            class:'error-link',
            text: 'На главную',
            events:{
                click: function(){
                    router.go('/');
                }
            }
        })
    };

    let serverError = {
        code:'500',
        text:'Мы уже фиксим',
        link: new Link({
            class:'error-link',
            text: 'На главную',
            events:{
                click: function(){
                    router.go('/');
                }
            }
        })
    };

    return{
        notFound,
        serverError,
    };

})();


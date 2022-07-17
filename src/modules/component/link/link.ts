import Handlebars from "handlebars";
import { Block } from "../../../servises/block/block";
import Template from "./link.hbs";

type LinkProps = {
    class: string;
    text: string;
    events:Record<string,Function>;
}

export class Link extends Block{

    constructor(props:LinkProps){
        super('div',props);
    }

    render(): DocumentFragment {
        return this.compile(Template,this.props)
    }

}
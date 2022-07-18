import { set } from "../../utils";
import { EventBus } from "../block/event-bus";

type Indexed<T = any> = {
    [key in string]: T;
};

export enum StoreEvents {
    Updated = 'updated'
}

class Store extends EventBus{
    private state: Indexed = {};

    public getState(){
        return this.state;
    };

    public set(path: string, value:unknown){
        set(this.state, path, value);
        this.emit(StoreEvents.Updated);
    };
}

export default new Store();
import { Block } from "../servises/block/block";
import store, { StoreEvents } from "../servises/store/store";
import { isEqual } from "./isEqual";

type Indexed<T = any> = {
    [key in string]: T;
};

function connect(mapStateToProps){
    return function(Component: typeof Block){
        return class extends Component{
            constructor(...args){
                const state = mapStateToProps(store.getState());

                super(...args, ...state);
    
                store.on(StoreEvents.Updated,()=>{

                    const newState = mapStateToProps(store.getState());

                    if(!isEqual(state, newState)){
                        this.setProps({...newState});
                    }

                    this.setProps({...store.getState()});
                });
            }
        }
    }
}

export const withUser = connect(state => ({ user: state.user }));

import * as KormActions from '../actions/new-korm.actions';
import { NewKorm } from '../models/new-korm';


const initialState: NewKorm = {
    name: 'Семена злаковых',
    category: 'Кормовые',
    price: 1000,
    property1: 1,
    property2: 1,
    property3: 1,
    property4: 1,
    property5: 1,
    property6: 1,
    property7: 1,
    property8: 1,
    property9: 1,
    property10: 1,
    property11: 1,
    property12: 1,
    property13: 1,
    property14: 1,
    property15: 1,
    property16: 1,
    property17: 1,
    property18: 1,
    property19: 1,
    property20: 1,
    property21: 1,
    property22: 1
  



}

export function reducerKorms(state: NewKorm[] = [initialState], action: KormActions.Actions) {

    switch(action.type){
        
        case KormActions.ADD_KORM:
            return [...state, action.payload];
        
        case KormActions.REMOVE_KORM:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;

    }

}
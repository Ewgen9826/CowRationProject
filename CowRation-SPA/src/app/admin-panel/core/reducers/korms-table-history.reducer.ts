import * as KormActions from '../actions/new-korm.actions';

import { KormsHistory } from '../models/korms-table-history';
import * as HistoryKormActions from '../actions/korms-table-history.actions';


const initialState: KormsHistory = {
    user: 'Victor',
    createData: "9/17/2019",
    price: 1000
}

export function reducerHistoryKorms(state: KormsHistory[] = [initialState], action: HistoryKormActions.GetHistoryKorm) {

    switch(action.type){
        
        case HistoryKormActions.GET_HISTORY_KORM:
            return [...state, action.payload];     

        default:
            return state;

    }

}
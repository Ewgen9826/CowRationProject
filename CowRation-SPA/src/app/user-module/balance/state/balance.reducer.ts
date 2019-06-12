import { KormStorage } from '../models/korm-storage';
import { BalanceActions, BalanceActionType } from './balance.actions';


export interface BalanceState {
    korms: KormStorage[],
    error: string
}

export const initialState: BalanceState = {
    korms: [],
    error: ""
};

export function balanceReducer(state = initialState, action: BalanceActions): BalanceState {
    switch (action.type) {
        case BalanceActionType.LOAD_SUCCESS:
            return {
                korms: action.payload,
                error: ""
            };
        case BalanceActionType.LOAD_FAIL:
            return {
                korms: [],
                error: action.payload
            }
        case BalanceActionType.LOAD_HOWMANY_DAY:
            return {
                korms: action.payload,
                error: ""
            }
        default: return state;
    }
}
import { KormStorage } from '../models/korm-storage';
import { BalanceActions, BalanceActionType } from './balance.actions';


export interface BalanceState {
    korms: KormStorage[],
    error: string,
    loading: boolean
}

export const initialState: BalanceState = {
    korms: [],
    error: "",
    loading: false
};

export function balanceReducer(state = initialState, action: BalanceActions): BalanceState {
    switch (action.type) {
        case BalanceActionType.LOAD_STORAGE_KORMS:
            return {
                ...state,
                loading: true
            };
        case BalanceActionType.LOAD_SUCCESS:
            return {
                korms: action.payload,
                error: "",
                loading: false
            };
        case BalanceActionType.LOAD_FAIL:
            return {
                korms: [],
                loading: false,
                error: action.payload
            };
        case BalanceActionType.CHANGE_VALUE:
            return {
                ...state,
                loading: true
            };
        case BalanceActionType.CHANGE_VALUE_SUCCESS:
            return {
                ...state,
                loading: false,
                korms: action.payload
            };
        case BalanceActionType.CHANGE_VALUE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case BalanceActionType.CALC_DAY:
            return {
                ...state,
                loading: true
            }
        case BalanceActionType.CALC_DAY_SUCCESS:
            return {
                ...state,
                korms: action.payload,
                loading: false
            }
        case BalanceActionType.CALC_DAY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}
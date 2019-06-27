import { Ration } from '../state/ration.model';
import { UserActionType, UserActions } from './user.actions';


export interface UserState {
    rations: Ration[],
    error: string,
    loading: boolean
}

export const initialState: UserState = {
    rations: [],
    loading: false,
    error: ""
};

export function userReducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionType.LOAD_RATIONS:
            return {
                ...state,
                loading: true
            };
        case UserActionType.LOAD_RATIONS_SUCCESS:
            return {
                rations: action.payload,
                error: "",
                loading: false
            }
        case UserActionType.LOAD_RATIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}
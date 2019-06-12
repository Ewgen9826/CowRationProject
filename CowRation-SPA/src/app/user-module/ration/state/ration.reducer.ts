import { Korm } from "../models/korm";
import { RationActions, RationActionType } from "./ration.actions";

export interface RationState {
    korms: Korm[];
    userKorms: Korm[];
    error: string;
}

const initialState: RationState = {
    korms: [],
    userKorms: [],
    error: ""
};

export function reducer(state = initialState, action: RationActions): RationState {
    switch (action.type) {
        case RationActionType.LOAD_KORMS_SUCCESS:
            return {
                ...state,
                korms: action.payload,
                error: ""
            };
        case RationActionType.LOAD_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case RationActionType.LOAD_KORMS_USER_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
                error: ""
            };
        case RationActionType.CHANGE_USER_KORMS_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
                error: ""
            }
        default:
            return state;
    }
}
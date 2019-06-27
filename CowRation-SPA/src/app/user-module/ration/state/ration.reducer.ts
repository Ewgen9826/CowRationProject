import { Korm } from "../models/korm";
import { RationActions, RationActionType } from "./ration.actions";
import { FeedingCategory } from '../models/feeding-category';
import { Laboratory } from '../models/laboratory';
import { Ration } from '../models/ration';

export interface RationState {
    korms: Korm[];
    userKorms: Korm[];
    laboratory: Laboratory[],
    feedingCategory: FeedingCategory;
    cowCount: number;
    rations: Ration[];
    error: string;
    loading: boolean;
}

const initialState: RationState = {
    korms: [],
    userKorms: [],
    laboratory: [],
    cowCount: 0,
    feedingCategory: null,
    rations: [],
    error: "",
    loading: false
};

export function reducer(state = initialState, action: RationActions): RationState {
    switch (action.type) {
        case RationActionType.LOAD_KORMS:
            return {
                ...state,
                loading: true
            }
        case RationActionType.LOAD_KORMS_SUCCESS:
            return {
                ...state,
                korms: action.payload,
                error: "",
                loading: false
            };
        case RationActionType.LOAD_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case RationActionType.LOAD_KORMS_USER: {
            return {
                ...state,
                loading: true
            }
        }
        case RationActionType.LOAD_KORMS_USER_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
                error: "",
                loading: false
            };
        case RationActionType.CHANGE_USER_KORMS_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
                error: "",
                loading: false
            }
        case RationActionType.LOAD_FEEDING_CATEGORY:
            return {
                ...state,
                loading: true
            }
        case RationActionType.LOAD_FEEDING_CATEGORY_SUCCESS:
            return {
                ...state,
                feedingCategory: action.payload,
                loading: false
            }
        case RationActionType.LOAD_FEEDING_CATEGORY_FAIL:
            return {
                ...state,
                feedingCategory: null,
                error: action.payload,
                loading: false
            }
        case RationActionType.CHANGE_FEEDING_CATEGORY_SUCCESS:
            return {
                ...state,
                feedingCategory: action.payload,
                loading: false
            }
        case RationActionType.LOAD_LABORATORY_SUCCESS:
            return {
                ...state,
                laboratory: action.payload
            }
        case RationActionType.LOAD_LABORATORY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case RationActionType.CHANGE_LABORATORY:
            return {
                ...state,
                loading: true
            }
        case RationActionType.CHANGE_LABORATORY_SUCCESS:
            return {
                ...state,
                loading: false,
                laboratory: action.payload
            }
        case RationActionType.LOAD_COWCOUNT:
            return {
                ...state,
                loading: true
            }
        case RationActionType.LOAD_COWCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                cowCount: action.payload
            }
        case RationActionType.LOAD_COWCOUNT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RationActionType.CHANGE_COWCOWNT:
            return {
                ...state,
                loading: true
            }
        case RationActionType.CHANGE_COWCOWNT_SUCCESS:
            return {
                ...state,
                loading: false,
                cowCount: action.payload
            }
        case RationActionType.CALCULATE_RATIONS:
            return {
                ...state,
                loading: true
            }
        case RationActionType.LOAD_RATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                rations: action.payload
            }
        case RationActionType.LOAD_RATIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
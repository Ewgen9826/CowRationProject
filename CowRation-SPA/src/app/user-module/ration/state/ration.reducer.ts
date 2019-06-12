import { Korm } from "../models/korm";
import { RationActions, RationActionType } from "./ration.actions";
import { FeedingCategory } from '../models/feeding-category';
import { Laboratory } from '../models/laboratory';

export interface RationState {
    korms: Korm[];
    userKorms: Korm[];
    laboratory: Laboratory[],
    feedingCategory: FeedingCategory;
    error: string;
    loading: boolean;
}

const initialState: RationState = {
    korms: [],
    userKorms: [],
    laboratory: [],
    feedingCategory: null,
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
        default:
            return state;
    }
}
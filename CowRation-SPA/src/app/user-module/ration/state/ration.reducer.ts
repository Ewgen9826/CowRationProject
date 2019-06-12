import { Korm } from "../models/korm";
import { RationActions, RationActionType } from "./ration.actions";
<<<<<<< HEAD
import { FeedingCategory } from '../models/feeding-category';
import { Laboratory } from '../models/laboratory';
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

export interface RationState {
    korms: Korm[];
    userKorms: Korm[];
<<<<<<< HEAD
    laboratory: Laboratory[],
    feedingCategory: FeedingCategory;
    error: string;
    loading: boolean;
=======
    error: string;
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
}

const initialState: RationState = {
    korms: [],
    userKorms: [],
<<<<<<< HEAD
    laboratory: [],
    feedingCategory: null,
    error: "",
    loading: false
=======
    error: ""
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
};

export function reducer(state = initialState, action: RationActions): RationState {
    switch (action.type) {
<<<<<<< HEAD
        case RationActionType.LOAD_KORMS:
            return {
                ...state,
                loading: true
            }
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        case RationActionType.LOAD_KORMS_SUCCESS:
            return {
                ...state,
                korms: action.payload,
<<<<<<< HEAD
                error: "",
                loading: false
=======
                error: ""
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            };
        case RationActionType.LOAD_FAIL:
            return {
                ...state,
<<<<<<< HEAD
                error: action.payload,
                loading: false
            };
        case RationActionType.LOAD_KORMS_USER: {
            return {
                ...state,
                loading: true
            }
        }
=======
                error: action.payload
            };
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        case RationActionType.LOAD_KORMS_USER_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
<<<<<<< HEAD
                error: "",
                loading: false
=======
                error: ""
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            };
        case RationActionType.CHANGE_USER_KORMS_SUCCESS:
            return {
                ...state,
                userKorms: action.payload,
<<<<<<< HEAD
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
=======
                error: ""
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            }
        default:
            return state;
    }
}
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Korm } from '../../models/korm';
import { KormsActions, KormsActionsType } from './korms.actions';

export interface KormState extends EntityState<Korm> {
    selectKormId: number | null;
    loading: boolean;
    error: string;
}
export const adapter: EntityAdapter<Korm> = createEntityAdapter<Korm>();
const defaultState: KormState = {
    ids: [],
    entities: {},
    loading: false,
    error: "",
    selectKormId: null
};

export const initialState: KormState = adapter.getInitialState(defaultState);

export function kormReducer(state = initialState, action: KormsActions): KormState {
    switch (action.type) {
        case KormsActionsType.LOADING_KORMS:
            return {
                ...state,
                loading: true
            }
        case KormsActionsType.LOADING_KORMS_SUCCESS:
            return {
                ...adapter.addAll(action.payload, state),
                loading: false,
            }
        case KormsActionsType.LOADING_KORMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case KormsActionsType.ADD_KORM:
            return {
                ...state,
                loading: true
            }
        case KormsActionsType.ADD_KORM_SUCCESS:
            return {
                ...adapter.addOne(action.payload, state),
                loading: false
            }
        case KormsActionsType.ADD_KORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case KormsActionsType.REMOVE_KORM:
            return {
                ...state,
                loading: true
            }
        case KormsActionsType.REMOVE_KORM_SUCCESS:
            return {
                ...adapter.removeOne(action.payload, state),
                loading: false,
            }
        case KormsActionsType.REMOVE_KORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getSelectedUserId = (state: KormState) => state.selectKormId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectKormIds = selectIds;

// select the dictionary of user entities
export const selectKormEntities = selectEntities;

// select the array of users
export const selectAllKorms = selectAll;

// select the total user count
export const selectKormTotal = selectTotal;
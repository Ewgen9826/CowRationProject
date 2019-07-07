import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { User } from '../../models/user';
import { UserActionsType, UserActions } from './user.actions';

export interface UserState extends EntityState<User> {
    selectUserId: number | null;
    loading: boolean;
    error: string;
}
export const adapter: EntityAdapter<User> = createEntityAdapter<User>();
const defaultState: UserState = {
    ids: [],
    entities: {},
    loading: false,
    error: "",
    selectUserId: null
};

export const initialState: UserState = adapter.getInitialState(defaultState);

export function userReducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionsType.LOADING_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionsType.LOADING_USERS_SUCCESS:
            return {
                ...adapter.addAll(action.payload, state),
                loading: false,
            }
        case UserActionsType.LOADING_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsType.ADD_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionsType.ADD_USER_SUCCESS:
            return {
                ...adapter.addOne(action.payload, state),
                loading: false
            }
        case UserActionsType.ADD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionsType.REMOVE_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionsType.REMOVE_USER_SUCCESS:
            return {
                ...adapter.removeOne(action.payload, state),
                loading: false,
            }
        case UserActionsType.REMOVE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getSelectedUserId = (state: UserState) => state.selectUserId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
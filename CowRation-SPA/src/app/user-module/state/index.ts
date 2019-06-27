import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from "../../state/app.state";
import * as fromUser from "../state/user.reducer";
export interface UserState extends fromRoot.AppState {
    user: fromUser.UserState;
}

const getUserState = createFeatureSelector<fromUser.UserState>("user");

export const getRationsState = createSelector(
    getUserState,
    state => state.rations
)

export const getIsRationCalculate = createSelector(
    getRationsState,
    state => {
        return state.length === 0 ? false : true;
    }
)
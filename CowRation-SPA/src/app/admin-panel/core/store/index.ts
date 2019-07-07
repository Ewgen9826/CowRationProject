import * as fromUsers from "./user/user.reducer";
import * as fromKorms from "./korms/korms.reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AdminState {
    users: fromUsers.UserState;
    korms: fromKorms.KormState;
}

export const reducers: ActionReducerMap<AdminState> = {
    users: fromUsers.userReducer,
    korms: fromKorms.kormReducer
};

export const selectUsersState = createFeatureSelector<fromUsers.UserState>("userManagment");
export const selectKormstate = createFeatureSelector<fromKorms.KormState>("kormManagment");

export const AllUserState = createSelector(
    selectUsersState,
    fromUsers.selectAllUsers
);

export const AllKormsState = createSelector(
    selectKormstate,
    fromKorms.selectAllKorms
);
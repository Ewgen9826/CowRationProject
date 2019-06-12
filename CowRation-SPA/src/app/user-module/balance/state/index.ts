import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BalanceState } from './balance.reducer';
import * as fromRoot from "../../../state/app.state";

export interface BalanceState extends fromRoot.AppState {
    balance: BalanceState;
}

const getBalanceState = createFeatureSelector<BalanceState>("balance");

export const getStorageKorms = createSelector(
    getBalanceState,
    state => state.korms
)
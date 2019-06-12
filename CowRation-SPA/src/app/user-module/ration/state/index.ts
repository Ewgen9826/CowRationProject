import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "../../../state/app.state";
import * as fromRation from "./ration.reducer";

export interface RationState extends fromRoot.AppState {
    ration: fromRation.RationState;
}

const getRationFeatureState = createFeatureSelector<fromRation.RationState>("ration");

export const getKorms = createSelector(
    getRationFeatureState,
    state => state.korms
);

export const getUserKorms = createSelector(
    getRationFeatureState,
    state => state.userKorms
);
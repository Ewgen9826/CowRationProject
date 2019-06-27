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

export const getFeedingCategory = createSelector(
    getRationFeatureState,
    state => state.feedingCategory
);

export const getLaboratoryIndicators = createSelector(
    getRationFeatureState,
    state => state.laboratory
);

export const getLoadingState = createSelector(
    getRationFeatureState,
    state => state.loading
);

export const getCowCountState = createSelector(
    getRationFeatureState,
    state => state.cowCount
)

export const getRationState = createSelector(
    getRationFeatureState,
    state => state.rations
)
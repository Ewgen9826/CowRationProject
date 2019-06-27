import * as fromRoot from "../../../state/app.state";
import * as fromEconomy from "./economy.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface EconomyState extends fromRoot.AppState {
    economy: fromEconomy.EconomyState;
}

const getEconomyFeatureState = createFeatureSelector<fromEconomy.EconomyState>("economy");

export const getPreviousYearDataState = createSelector(
    getEconomyFeatureState,
    state => state.previousYearData
);

export const getCharacteristicsMilkState = createSelector(
    getEconomyFeatureState,
    state => state.characteristicsMilk
);
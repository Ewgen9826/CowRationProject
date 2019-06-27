import { CharacteristicsMilk } from '../models/CharacteristicsMilk';
import { PreviousYearData } from '../models/PreviousYearData';
import { Expenses } from '../models/Expenses';
import { EconomyActions, EconomyActionType } from './economy.actions';

export interface EconomyState {
    previousYearData: PreviousYearData;
    characteristicsMilk: CharacteristicsMilk;
    expenses: Expenses[];
    error: string;
    loading: boolean;
}

const initialState: EconomyState = {
    previousYearData: {
        overallVolume: 0,
        actualMilkFat: 0,
        averageMilkYield: 0
    },
    characteristicsMilk: {
        extraPercent: 10,
        extraPrice: 10,
        firstPercent: 20,
        firstPrice: 40,
        higherPercent: 40,
        higherPrice: 10
    },
    expenses: [],
    error: null,
    loading: false
}

export function economyReducer(state = initialState, action: EconomyActions): EconomyState {
    switch (action.type) {
        case EconomyActionType.CHARACTERISTICS_MILK_SET:
            return {
                ...state,
                characteristicsMilk: action.payload
            }
        case EconomyActionType.PREVIOUS_YEAR_DATA_SET:
            return {
                ...state,
                previousYearData: action.payload
            }
        case EconomyActionType.LOAD_EXPENSES:
            return {
                ...state,
                loading: true
            }
        case EconomyActionType.LOAD_EXPENSES_SUCCESS:
            return {
                ...state,
                loading: false,
                expenses: action.payload
            }
        case EconomyActionType.LOAD_EXPENSES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case EconomyActionType.EXPENSES_CHANGE:
            return {
                ...state,
                loading: true
            }
        case EconomyActionType.EXPENSES_CHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                expenses: action.payload
            }
        case EconomyActionType.EXPENSES_CHANGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}
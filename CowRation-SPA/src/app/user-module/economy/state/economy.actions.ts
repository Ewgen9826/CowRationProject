import { Action } from '@ngrx/store';
import { CharacteristicsMilk } from '../models/CharacteristicsMilk';
import { PreviousYearData } from '../models/PreviousYearData';
import { Expenses } from '../models/Expenses';

export enum EconomyActionType {
    CHARACTERISTICS_MILK_SET = "[Economy] Characteristics Milk Set",
    PREVIOUS_YEAR_DATA_SET = "[Economy] Previous Year Data Set",

    LOAD_EXPENSES = "[Economy] Load Expenses",
    LOAD_EXPENSES_SUCCESS = "[Economy] Load Expenses Success",
    LOAD_EXPENSES_FAIL = "[Economy] Load Expenses Fail",

    EXPENSES_CHANGE = "[Economy] Expenses change",
    EXPENSES_CHANGE_SUCCESS = "[Economy] Expenses change success",
    EXPENSES_CHANGE_FAIL = "[Economy] Expenses change fail",
}

export class CharacteristicsSet implements Action {
    readonly type = EconomyActionType.CHARACTERISTICS_MILK_SET;
    constructor(public payload: CharacteristicsMilk) { }
}

export class PreviousYearDataSet implements Action {
    readonly type = EconomyActionType.PREVIOUS_YEAR_DATA_SET;
    constructor(public payload: PreviousYearData) { }
}

export class LoadExpenses implements Action {
    readonly type = EconomyActionType.LOAD_EXPENSES;
}

export class LoadExpensesSuccess implements Action {
    readonly type = EconomyActionType.LOAD_EXPENSES_SUCCESS;
    constructor(public payload: Expenses[]) { }
}

export class LoadExpensesFail implements Action {
    readonly type = EconomyActionType.LOAD_EXPENSES_FAIL;
    constructor(public payload: string) { }
}

export class ExpensesChange implements Action {
    readonly type = EconomyActionType.EXPENSES_CHANGE;
    constructor(public payload: Expenses[]) { }
}

export class ExpensesChangeSuccess implements Action {
    readonly type = EconomyActionType.EXPENSES_CHANGE_SUCCESS;
    constructor(public payload: Expenses[]) { }
}

export class ExpensesChangeFail implements Action {
    readonly type = EconomyActionType.EXPENSES_CHANGE_FAIL;
    constructor(public payload: string) { }
}

export type EconomyActions =
    CharacteristicsSet
    | PreviousYearDataSet
    | LoadExpenses
    | LoadExpensesSuccess
    | LoadExpensesFail
    | ExpensesChange
    | ExpensesChangeSuccess
    | ExpensesChangeFail;
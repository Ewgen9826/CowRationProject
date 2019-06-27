import { Action } from '@ngrx/store';
import { KormStorage } from '../models/korm-storage';

export enum BalanceActionType {
    LOAD_STORAGE_KORMS = "[Balance] Load storage korms",
    LOAD_SUCCESS = "[Balance] Load storage korms success",
    LOAD_FAIL = "[Balance] Load storage korms fail",

    CALC_DAY = "[Balance] Calc day",
    CALC_DAY_SUCCESS = "[Balance] Calc day success",
    CALC_DAY_FAIL = "[Balance] Calc day fail",

    CHANGE_VALUE = "[Balance] Change value korms",
    CHANGE_VALUE_SUCCESS = "[Balance] Change value korms success",
    CHANGE_VALUE_FAIL = "[Balance] Change value korms fail"
}

export class LoadStorageKorms implements Action {
    readonly type = BalanceActionType.LOAD_STORAGE_KORMS;
}

export class LoadSuccess implements Action {
    readonly type = BalanceActionType.LOAD_SUCCESS;
    constructor(public payload: KormStorage[]) { }
}

export class LoadFail implements Action {
    readonly type = BalanceActionType.LOAD_FAIL;
    constructor(public payload: string) { }
}

export class CalcDay implements Action {
    readonly type = BalanceActionType.CALC_DAY;
    constructor(public payload: number) { }
}

export class CalcDaySuccess implements Action {
    readonly type = BalanceActionType.CALC_DAY_SUCCESS;
    constructor(public payload: KormStorage[]) { }
}

export class CalcDayFail implements Action {
    readonly type = BalanceActionType.CALC_DAY_FAIL;
    constructor(public payload: string) { }
}

export class ChangeValue implements Action {
    readonly type = BalanceActionType.CHANGE_VALUE;
    constructor(public payload: KormStorage[]) { }
}

export class ChangeValueSuccess implements Action {
    readonly type = BalanceActionType.CHANGE_VALUE_SUCCESS;
    constructor(public payload: KormStorage[]) { }
}

export class ChangeValueFail implements Action {
    readonly type = BalanceActionType.CHANGE_VALUE_FAIL;
    constructor(public payload: string) { }
}
export type BalanceActions = LoadStorageKorms
    | LoadSuccess
    | LoadFail
    | CalcDay
    | CalcDaySuccess
    | CalcDayFail
    | ChangeValue
    | ChangeValueSuccess
    | ChangeValueFail;
import { Action } from '@ngrx/store';
import { KormStorage } from '../models/korm-storage';

export enum BalanceActionType {
    LOAD_STORAGE_KORMS = "[Balance] Load storage korms",
    LOAD_SUCCESS = "[Balance] Load storage korms success",
    LOAD_FAIL = "[Balance] Load storage korms fail",
    CALC_DAY = "[Balance] Calc day",
    LOAD_HOWMANY_DAY = "[Balance] load how many day korms"
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
    constructor(public payload: KormStorage[]) { }
}

export class LoadHowManyDay implements Action {
    readonly type = BalanceActionType.LOAD_HOWMANY_DAY;
    constructor(public payload: KormStorage[]) { }
}
export type BalanceActions = LoadStorageKorms
    | LoadSuccess
    | LoadFail
    | CalcDay
    | LoadHowManyDay;
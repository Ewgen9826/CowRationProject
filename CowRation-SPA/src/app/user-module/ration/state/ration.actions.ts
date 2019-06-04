import { Action } from "@ngrx/store";
import { Korm } from "../models/korm";

export enum RationActionType {
    LOAD_KORMS = "[Ration] Load Korms",
    LOAD_KORMS_USER = "[Ration] Load User Korms",
    LOAD_KORMS_SUCCESS = "[Ration] Load Korms Success",
    LOAD_KORMS_USER_SUCCESS = "[Ration] Load User Korms Success",
    LOAD_FAIL = "[Ration] Fail",
    CHANGE_USER_KORMS = "[Ration] Change user korms",
    CHANGE_USER_KORMS_SUCCESS = "[Ration] Change user korms success"
}

export class LoadKorms implements Action {
    readonly type = RationActionType.LOAD_KORMS;
}

export class LoadUserKorms implements Action {
    readonly type = RationActionType.LOAD_KORMS_USER;
}

export class LoadKormsSuccess implements Action {
    readonly type = RationActionType.LOAD_KORMS_SUCCESS;
    constructor(public payload: Korm[]) { }
}

export class LoadUserKormsSuccess implements Action {
    readonly type = RationActionType.LOAD_KORMS_USER_SUCCESS;
    constructor(public payload: Korm[]) { }
}

export class LoadFail implements Action {
    readonly type = RationActionType.LOAD_FAIL;
    constructor(public payload: string) { }
}

export class ChangeUserKorms implements Action{
    readonly type = RationActionType.CHANGE_USER_KORMS;
    constructor(public payload: Korm[]) { }
}

export class ChangeUserKormsSuccess implements Action{
    readonly type = RationActionType.CHANGE_USER_KORMS_SUCCESS;
    constructor(public payload: Korm[]) { }
}

export type RationActions = LoadKorms 
| LoadKormsSuccess 
| LoadUserKorms 
| LoadUserKormsSuccess 
| LoadFail
| ChangeUserKorms
| ChangeUserKormsSuccess;
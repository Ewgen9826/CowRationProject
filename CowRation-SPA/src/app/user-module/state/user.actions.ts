import { Action } from '@ngrx/store';
import { Ration } from "../state/ration.model";

export enum UserActionType {
    LOAD_RATIONS = "[User] Load rations",
    LOAD_RATIONS_SUCCESS = "[User] Load rations success",
    LOAD_RATIONS_FAIL = "[User] Load rations fail"
}

export class LoadRations implements Action {
    readonly type = UserActionType.LOAD_RATIONS;
}

export class LoadRationsSuccess implements Action {
    readonly type = UserActionType.LOAD_RATIONS_SUCCESS;
    constructor(public payload: Ration[]) { }
}

export class LoadRationFail implements Action {
    readonly type = UserActionType.LOAD_RATIONS_FAIL;
    constructor(public payload: string) { }
}


export type UserActions = LoadRations
    | LoadRationsSuccess
    | LoadRationFail;
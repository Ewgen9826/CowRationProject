import { Action } from '@ngrx/store';
import { Korm } from '../../models/korm';

export enum KormsActionsType {
    LOADING_KORMS = "[Korms] Loading Korms ....",
    LOADING_KORMS_SUCCESS = "[Korms] Loading Korms Success",
    LOADING_KORMS_FAIL = "[Korms] Loading Korms Fail",

    ADD_KORM = "[Korms] Add korm",
    ADD_KORM_SUCCESS = "[Korms] Add korm success",
    ADD_KORM_FAIL = "[Korms] Add korm fail",

    REMOVE_KORM = "[Korms] Remove korm",
    REMOVE_KORM_SUCCESS = "[Korms] Remove korm success",
    REMOVE_KORM_FAIL = "[Korms] Remove korm fail",
}

export class LoadingKorms implements Action {
    readonly type = KormsActionsType.LOADING_KORMS;
}

export class LoadingKormsSuccess implements Action {
    readonly type = KormsActionsType.LOADING_KORMS_SUCCESS;
    constructor(public payload: Korm[]) { }
}

export class LoadingKormsFail implements Action {
    readonly type = KormsActionsType.LOADING_KORMS_FAIL;
    constructor(public payload: string) { }
}

export class AddKorm implements Action {
    readonly type = KormsActionsType.ADD_KORM;
    constructor(public payload: Korm) { }
}

export class AddKormSuccess implements Action {
    readonly type = KormsActionsType.ADD_KORM_SUCCESS;
    constructor(public payload: Korm) { }
}

export class AddKormFail implements Action {
    readonly type = KormsActionsType.ADD_KORM_FAIL;
    constructor(public payload: string) { }
}

export class RemoveKorm implements Action {
    readonly type = KormsActionsType.REMOVE_KORM;
    constructor(public payload: number) { }
}

export class RemoveKormSuccess implements Action {
    readonly type = KormsActionsType.REMOVE_KORM_SUCCESS;
    constructor(public payload: number) { }
}

export class RemoveKormFail implements Action {
    readonly type = KormsActionsType.REMOVE_KORM_FAIL;
    constructor(public payload: string) { }
}

export type KormsActions = LoadingKorms
    | LoadingKormsSuccess
    | LoadingKormsFail
    | AddKorm
    | AddKormSuccess
    | AddKormFail
    | RemoveKorm
    | RemoveKormSuccess
    | RemoveKormFail;
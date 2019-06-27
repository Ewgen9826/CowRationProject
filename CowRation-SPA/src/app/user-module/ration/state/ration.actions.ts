import { Action } from "@ngrx/store";
import { Korm } from "../models/korm";
import { FeedingCategory } from '../models/feeding-category';
import { Laboratory } from '../models/laboratory';
import { Ration } from '../../state/ration.model';

export enum RationActionType {
    LOAD_KORMS = "[Ration] Load Korms",
    LOAD_KORMS_USER = "[Ration] Load User Korms",
    LOAD_KORMS_SUCCESS = "[Ration] Load Korms Success",
    LOAD_KORMS_USER_SUCCESS = "[Ration] Load User Korms Success",
    LOAD_FAIL = "[Ration] Fail",

    CHANGE_USER_KORMS = "[Ration] Change user korms",
    CHANGE_USER_KORMS_SUCCESS = "[Ration] Change user korms success",

    LOAD_FEEDING_CATEGORY = "[Ration] Load Feeding Category",
    LOAD_FEEDING_CATEGORY_SUCCESS = "[Ration] Load Feeding Category Success",
    LOAD_FEEDING_CATEGORY_FAIL = "[Ration] Load Feeding Category Fail",

    CHANGE_FEEDING_CATEGORY = "[Ration] Change feeding category",
    CHANGE_FEEDING_CATEGORY_SUCCESS = "[Ration] Change feeding category success",

    LOAD_LABORATORY = "[Ration] Load laboratory",
    LOAD_LABORATORY_SUCCESS = "[Ration] Load laboratory success",
    LOAD_LABORATORY_FAIL = "[Ration] Load laboratory fail",

    CHANGE_LABORATORY = "[Ration] Change Laboratory indicators",
    CHANGE_LABORATORY_SUCCESS = "[Ration] Change Laboratory indicators success",

    LOAD_COWCOUNT = "[Ration] Load cow count",
    LOAD_COWCOUNT_SUCCESS = "[Ration] Load cow count success",
    LOAD_COWCOUNT_FAIL = "[Ration] Load cow count fail",

    CHANGE_COWCOWNT = "[Ration] Change cow count",
    CHANGE_COWCOWNT_SUCCESS = "[Ration] Change cow count success",

    CALCULATE_RATIONS = "[Ration] Calculate rations",
    LOAD_RATIONS = "[Ration] Load Rations",
    LOAD_RATIONS_SUCCESS = "[Ration] Load Rations Success",
    LOAD_RATIONS_FAIL = "[Ration] Load Rations Fail"
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


export class ChangeUserKorms implements Action {
    readonly type = RationActionType.CHANGE_USER_KORMS;
    constructor(public payload: Korm[]) { }
}

export class ChangeUserKormsSuccess implements Action {
    readonly type = RationActionType.CHANGE_USER_KORMS_SUCCESS;
    constructor(public payload: Korm[]) { }
}

export class LoadFeedingCategory implements Action {
    readonly type = RationActionType.LOAD_FEEDING_CATEGORY;
}

export class LoadFeedingCategorySuccess implements Action {
    readonly type = RationActionType.LOAD_FEEDING_CATEGORY_SUCCESS;
    constructor(public payload: FeedingCategory) { }
}

export class LoadFeedingCategoryFail implements Action {
    readonly type = RationActionType.LOAD_FEEDING_CATEGORY_FAIL;
    constructor(public payload: string) { }
}

export class ChangeFeedingCategory implements Action {
    readonly type = RationActionType.CHANGE_FEEDING_CATEGORY;
    constructor(public payload: FeedingCategory) { }
}

export class ChangeFeedingCategorySuccess implements Action {
    readonly type = RationActionType.CHANGE_FEEDING_CATEGORY_SUCCESS;
    constructor(public payload: FeedingCategory) { }
}

export class LoadLaboratory implements Action {
    readonly type = RationActionType.LOAD_LABORATORY;
}

export class LoadLaboratorySuccess implements Action {
    readonly type = RationActionType.LOAD_LABORATORY_SUCCESS;
    constructor(public payload: Laboratory[]) { }
}

export class LoadLaboratoryFail implements Action {
    readonly type = RationActionType.LOAD_LABORATORY_FAIL;
    constructor(public payload: string) { }
}

export class ChangeLaboratory implements Action {
    readonly type = RationActionType.CHANGE_LABORATORY;
    constructor(public payload: Laboratory[]) { }
}

export class ChangeLaboratorySuccess implements Action {
    readonly type = RationActionType.CHANGE_LABORATORY_SUCCESS;
    constructor(public payload: Laboratory[]) { }
}

export class LoadCowCount implements Action {
    readonly type = RationActionType.LOAD_COWCOUNT;
}

export class LoadCowCountSuccess implements Action {
    readonly type = RationActionType.LOAD_COWCOUNT_SUCCESS;
    constructor(public payload: number) { }
}

export class LoadCowCountFail implements Action {
    readonly type = RationActionType.LOAD_COWCOUNT_FAIL;
    constructor(public payload: string) { }
}

export class ChangeCowCount implements Action {
    readonly type = RationActionType.CHANGE_COWCOWNT;
    constructor(public payload: number) { }
}

export class ChangeCowCountSuccess implements Action {
    readonly type = RationActionType.CHANGE_COWCOWNT_SUCCESS;
    constructor(public payload: number) { }
}

export class CalculateRations implements Action {
    readonly type = RationActionType.CALCULATE_RATIONS;
}

export class LoadRations implements Action {
    readonly type = RationActionType.LOAD_RATIONS;
}

export class LoadRationsSuccess implements Action {
    readonly type = RationActionType.LOAD_RATIONS_SUCCESS;
    constructor(public payload: Ration[]) { }
}

export class LoadRationsFail implements Action {
    readonly type = RationActionType.LOAD_RATIONS_FAIL;
    constructor(public payload: string) { }
}
export type RationActions = LoadKorms
    | LoadKormsSuccess
    | LoadUserKorms
    | LoadUserKormsSuccess
    | LoadFail
    | ChangeUserKorms
    | ChangeUserKormsSuccess
    | LoadFeedingCategory
    | LoadFeedingCategorySuccess
    | LoadFeedingCategoryFail
    | ChangeFeedingCategory
    | ChangeFeedingCategorySuccess
    | LoadLaboratory
    | LoadLaboratorySuccess
    | LoadLaboratoryFail
    | ChangeLaboratory
    | ChangeLaboratorySuccess
    | LoadCowCount
    | LoadCowCountSuccess
    | LoadCowCountFail
    | ChangeCowCount
    | ChangeCowCountSuccess
    | CalculateRations
    | LoadRations
    | LoadRationsSuccess
    | LoadRationsFail;
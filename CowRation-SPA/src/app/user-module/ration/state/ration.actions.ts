import { Action } from "@ngrx/store";
import { Korm } from "../models/korm";
import { FeedingCategory } from '../models/feeding-category';
import { Laboratory } from '../models/laboratory';

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

    LOAD_LABORATORY="[Ration] Load laboratory",
    LOAD_LABORATORY_SUCCESS="[Ration] Load laboratory success",
    LOAD_LABORATORY_FAIL="[Ration] Load laboratory fail",

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

export class LoadLaboratory implements Action{
    readonly type = RationActionType.LOAD_LABORATORY;
}

export class LoadLaboratorySuccess implements Action{
    readonly type = RationActionType.LOAD_LABORATORY_SUCCESS;
    constructor(public payload:Laboratory[]){}
}

export class LoadLaboratoryFail implements Action{
    readonly type = RationActionType.LOAD_LABORATORY_FAIL;
    constructor(public payload:string){}
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
    | LoadLaboratoryFail;
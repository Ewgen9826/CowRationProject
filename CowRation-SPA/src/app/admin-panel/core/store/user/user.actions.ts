import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserActionsType {
    LOADING_USERS = "[User Managment] loading users",
    LOADING_USERS_SUCCESS = "[User Managment] loading users success",
    LOADING_USERS_FAIL = "[User Managment] loading users fail",

    ADD_USER = "[User Managment] add user",
    ADD_USER_SUCCESS = "[User Managment] add user success",
    ADD_USER_FAIL = "[User Managment] add user fail",

    REMOVE_USER = "[User Managment] remove user",
    REMOVE_USER_SUCCESS = "[User Managment] remove user success",
    REMOVE_USER_FAIL = "[User Managment] remove user fail",
}

export class LoadingUsers implements Action {
    readonly type = UserActionsType.LOADING_USERS;
}

export class LoadingUsersSuccess implements Action {
    readonly type = UserActionsType.LOADING_USERS_SUCCESS;
    constructor(public payload: User[]) { }
}

export class LoadingUsersFail implements Action {
    readonly type = UserActionsType.LOADING_USERS_FAIL;
    constructor(public payload: string) { }
}

export class AddUser implements Action {
    readonly type = UserActionsType.ADD_USER;
    constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
    readonly type = UserActionsType.ADD_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class AddUserFail implements Action {
    readonly type = UserActionsType.ADD_USER_FAIL;
    constructor(public payload: string) { }
}

export class RemoveUser implements Action {
    readonly type = UserActionsType.REMOVE_USER;
    constructor(public payload: number) { }
}

export class RemoveUserSuccess implements Action {
    readonly type = UserActionsType.REMOVE_USER_SUCCESS;
    constructor(public payload: number) { }
}

export class RemoveUserFail implements Action {
    readonly type = UserActionsType.REMOVE_USER_FAIL;
    constructor(public payload: string) { }
}

export type UserActions = LoadingUsers
    | LoadingUsersSuccess
    | LoadingUsersFail
    | AddUser
    | AddUserSuccess
    | AddUserFail
    | RemoveUser
    | RemoveUserSuccess
    | RemoveUserFail;
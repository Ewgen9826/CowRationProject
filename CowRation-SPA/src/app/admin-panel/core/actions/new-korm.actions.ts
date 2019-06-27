import { Action } from '@ngrx/store'

import { NewKorm } from '../models/new-korm';

export const ADD_KORM = '[KORM] Add'
export const REMOVE_KORM = '[KORM] Remove'

export class AddKorm implements Action{
    
    readonly type = ADD_KORM
    constructor(public payload: NewKorm){}
}

export class RemoveKorm implements Action{
    readonly type = REMOVE_KORM
    constructor(public payload: number){}
}

export type Actions = AddKorm | RemoveKorm
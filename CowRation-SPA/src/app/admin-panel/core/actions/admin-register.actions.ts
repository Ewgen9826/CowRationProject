import { Action } from '@ngrx/store'
import { AdminRegister } from '../models/admin-registration';


export const ADD_ADMIN_USER = '[ADMIN_USER] Add'


export class AddAdminUser implements Action{
    
    readonly type = ADD_ADMIN_USER
    constructor(public payload: AdminRegister){}
}



export type Actions = AddAdminUser 
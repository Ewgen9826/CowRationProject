import { Action } from '@ngrx/store'
import { KormsHistory } from '../models/korms-table-history';



export const GET_HISTORY_KORM = '[KORM_HISTORY] Add'


export class GetHistoryKorm implements Action{
    
    readonly type = GET_HISTORY_KORM
    constructor(public payload: KormsHistory){}
}



export type Actions = GetHistoryKorm 
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { BalanceService } from '../services/balance.service';
import {
    BalanceActionType,
    LoadSuccess,
    LoadFail,
    CalcDay,
    ChangeValueSuccess,
    ChangeValueFail,
    CalcDaySuccess,
    CalcDayFail
} from './balance.actions';
import { KormStorage } from '../models/korm-storage';

@Injectable()
export class BalanceEffect {
    constructor(
        private action$: Actions,
        private balanceServices: BalanceService,
        private alertifyService: AlertifyService
    ) { }

    @Effect()
    loadStorageKorms$: Observable<Action> = this.action$.pipe(
        ofType(BalanceActionType.LOAD_STORAGE_KORMS),
        mergeMap(action =>
            this.balanceServices.getStorageKorms().pipe(
                map((korms: KormStorage[]) => (new LoadSuccess(korms))),
                catchError(err => of(new LoadFail(err)))
            ))
    );

    @Effect()
    calcDay$: Observable<Action> = this.action$.pipe(
        ofType(BalanceActionType.CALC_DAY),
        mergeMap((action: CalcDay) =>
            this.balanceServices.getHowManyDay(action.payload).pipe(
                map((korms: KormStorage[]) => (new CalcDaySuccess(korms))),
                catchError(err => of(new CalcDayFail(err)))
            ))
    );

    @Effect()
    changeKormsStorage$: Observable<Action> = this.action$.pipe(
        ofType(BalanceActionType.CHANGE_VALUE),
        mergeMap((action: any) =>
            this.balanceServices.changeKormsStorage(action.payload).pipe(
                map((korms: KormStorage[]) => (new ChangeValueSuccess(korms))),
                catchError(err => of(new ChangeValueFail(err)))
            ))
    );
}

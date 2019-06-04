import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
    RationActionType,
    LoadKormsSuccess,
    LoadFail,
    LoadUserKormsSuccess,
    ChangeUserKormsSuccess
} from "./ration.actions";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { KormService } from "../services/korm.service";
import { AlertifyService } from "src/app/core/utils/alertify.service";

@Injectable()
export class RationEffects {
    constructor(
        private action$: Actions,
        private kormService: KormService,
        private alertifyService: AlertifyService
    ) { }

    @Effect()
    loadKorms$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.LOAD_KORMS),
        mergeMap(action =>
            this.kormService.getKorms().pipe(
                map(korms => (new LoadKormsSuccess(korms))),
                catchError(err => of(new LoadFail(err)))
            ))
    );

    @Effect()
    loadUserKorms$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.LOAD_KORMS_USER),
        mergeMap(action =>
            this.kormService.getUserKorms().pipe(
                map(userKorms => (new LoadUserKormsSuccess(userKorms))),
                catchError(err => of(new LoadFail(err)))
            ))
    );

    @Effect()
    changeUserKorms$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.CHANGE_USER_KORMS),
        mergeMap((action: any) =>
            this.kormService.changeUserKorms(action.payload).pipe(
                map((newKorms) => (new ChangeUserKormsSuccess(newKorms))),
                catchError(err => of(new LoadFail(err)))
            ))
    );

    @Effect({ dispatch: false })
    changeUserKormsSuccess$: Observable<any> = this.action$.pipe(
        ofType(RationActionType.CHANGE_USER_KORMS_SUCCESS),
        tap((korms) => {
            this.alertifyService.success("Список кормов изменен!");
        })
    );
}

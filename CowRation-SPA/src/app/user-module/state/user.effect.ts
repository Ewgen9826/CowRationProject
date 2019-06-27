import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { RationsService } from '../services/rations.service';
import { UserActionType, LoadRationsSuccess, LoadRationFail } from './user.actions';
import { Ration } from './ration.model';

@Injectable()
export class UserEffect {
    constructor(
        private action$: Actions,
        private rationsServices: RationsService,
        private alertifyService: AlertifyService
    ) { }

    @Effect()
    loadRations$: Observable<Action> = this.action$.pipe(
        ofType(UserActionType.LOAD_RATIONS),
        mergeMap(action =>
            this.rationsServices.getRations().pipe(
                map((rations: Ration[]) => (new LoadRationsSuccess(rations))),
                catchError(err => of(new LoadRationFail(err)))
            ))
    );
}

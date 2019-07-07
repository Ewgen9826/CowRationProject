import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { map, catchError, mergeMap } from "rxjs/operators";
import { of } from 'rxjs';
import { KormService } from '../../services/korm.service';
import {
    KormsActionsType,
    LoadingKormsSuccess,
    LoadingKormsFail,
    AddKorm,
    AddKormSuccess,
    AddKormFail,
    RemoveKorm,
    RemoveKormSuccess,
    RemoveKormFail
} from './korms.actions';

@Injectable()
export class KormsEffects {
    constructor(
        private actions$: Actions,
        private kormsService: KormService) { }
    @Effect()
    loadKorms$ = this.actions$.pipe(
        ofType(KormsActionsType.LOADING_KORMS),
        mergeMap(action =>
            this.kormsService.all().pipe(
                map(users => {
                    return new LoadingKormsSuccess(users)
                }),
                catchError(error => of(new LoadingKormsFail(error)))
            ))
    );

    @Effect()
    addKorm$ = this.actions$.pipe(
        ofType(KormsActionsType.ADD_KORM),
        mergeMap((action: AddKorm) =>
            this.kormsService.add(action.payload).pipe(
                map(user => new AddKormSuccess(user)),
                catchError(error => of(new AddKormFail(error)))
            ))
    );

    @Effect()
    removeKorm$ = this.actions$.pipe(
        ofType(KormsActionsType.REMOVE_KORM),
        mergeMap((action: RemoveKorm) =>
            this.kormsService.remove(action.payload).pipe(
                map(user => new RemoveKormSuccess(user)),
                catchError(error => of(new RemoveKormFail(error)))
            ))
    );
}
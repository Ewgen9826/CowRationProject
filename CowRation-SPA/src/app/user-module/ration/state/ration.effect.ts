import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
    RationActionType,
    LoadKormsSuccess,
    LoadFail,
    LoadUserKormsSuccess,
<<<<<<< HEAD
    ChangeUserKormsSuccess,
    LoadFeedingCategorySuccess,
    LoadFeedingCategoryFail,
    ChangeFeedingCategorySuccess,
    LoadLaboratorySuccess,
    LoadLaboratoryFail
} from "./ration.actions";
import { mergeMap, catchError, map, tap, merge } from "rxjs/operators";
import { KormService } from "../services/korm.service";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { FeedingService } from '../services/feeding.service';
import { FeedingCategory } from '../models/feeding-category';
import { Router } from '@angular/router';
import { LaboratoryService } from '../services/laboratory.service';
=======
    ChangeUserKormsSuccess
} from "./ration.actions";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { KormService } from "../services/korm.service";
import { AlertifyService } from "src/app/core/utils/alertify.service";
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

@Injectable()
export class RationEffects {
    constructor(
        private action$: Actions,
        private kormService: KormService,
<<<<<<< HEAD
        private feeding: FeedingService,
        private laboratory: LaboratoryService,
        private alertifyService: AlertifyService,
        private router: Router
=======
        private alertifyService: AlertifyService
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
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
<<<<<<< HEAD
            this.router.navigateByUrl("/company/ration/category-feel");
        })
    );

    @Effect()
    loadFeedingCategory$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.LOAD_FEEDING_CATEGORY),
        mergeMap(action =>
            this.feeding.getFeedingCategory().pipe(
                map(newFeedingCategory => new LoadFeedingCategorySuccess(newFeedingCategory)),
                catchError(err => of(new LoadFeedingCategoryFail(err)))
            ))
    );

    @Effect()
    changeFeedingCategory$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.CHANGE_FEEDING_CATEGORY),
        mergeMap((action: any) =>
            this.feeding.setFeedingCategory(action.payload).pipe(
                map((newFeedingCategory: FeedingCategory) => new ChangeFeedingCategorySuccess(newFeedingCategory),
                    catchError(err => of(new LoadFeedingCategoryFail(err))))
            ))
    );

    @Effect({ dispatch: false })
    changeFeedingCategorySuccess$: Observable<any> = this.action$.pipe(
        ofType(RationActionType.CHANGE_FEEDING_CATEGORY_SUCCESS),
        tap((data) => {
            this.alertifyService.success("Категория кормления изменена!");
            this.router.navigateByUrl("/company/ration/laboratory-feel");
        })
    );

    @Effect()
    loadLaboratory$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.LOAD_LABORATORY),
        mergeMap(action =>
            this.laboratory.getLaboratoryIndicators().pipe(
                map(newFeedingCategory => new LoadLaboratorySuccess(newFeedingCategory)),
                catchError(err => of(new LoadLaboratoryFail(err)))
            ))
    );
=======
        })
    );
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
}

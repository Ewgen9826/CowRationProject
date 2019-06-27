import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
    RationActionType,
    LoadKormsSuccess,
    LoadFail,
    LoadUserKormsSuccess,
    ChangeUserKormsSuccess,
    LoadFeedingCategorySuccess,
    LoadFeedingCategoryFail,
    ChangeFeedingCategorySuccess,
    LoadLaboratorySuccess,
    LoadLaboratoryFail,
    ChangeLaboratorySuccess,
    LoadCowCountSuccess,
    LoadCowCountFail,
    ChangeCowCountSuccess,
    LoadRationsSuccess
} from "./ration.actions";
import { mergeMap, catchError, map, tap, merge } from "rxjs/operators";
import { KormService } from "../services/korm.service";
import { AlertifyService } from "src/app/core/utils/alertify.service";
import { FeedingService } from '../services/feeding.service';
import { FeedingCategory } from '../models/feeding-category';
import { Router } from '@angular/router';
import { LaboratoryService } from '../services/laboratory.service';
import { CowCountService } from '../services/cow-count.service';
import { LoadRationFail } from '../../state/user.actions';
import { RationsService } from '../services/rations.service';

@Injectable()
export class RationEffects {
    constructor(
        private action$: Actions,
        private kormService: KormService,
        private cowCount: CowCountService,
        private feeding: FeedingService,
        private laboratory: LaboratoryService,
        private rations: RationsService,
        private alertifyService: AlertifyService,
        private router: Router) { }

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
            this.router.navigateByUrl("/company/ration/laboratory-feel");
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

    @Effect()
    changeLaboratory$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.CHANGE_LABORATORY),
        mergeMap((action: any) =>
            this.laboratory.setLaboratoryIndicators(action.payload).pipe(
                map(newLaboratories => new ChangeLaboratorySuccess(newLaboratories)),
                catchError(err => of(new LoadLaboratoryFail(err)))
            ))
    )

    @Effect({ dispatch: false })
    changeLaboratorySuccess$: Observable<any> = this.action$.pipe(
        ofType(RationActionType.CHANGE_LABORATORY_SUCCESS),
        tap((data) => {
            this.alertifyService.success("Результаты анализов успешно изменены!");
            this.router.navigateByUrl("/company/ration/cost-ration");
        })
    );

    @Effect()
    loadCowCount$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.LOAD_COWCOUNT),
        mergeMap(action =>
            this.cowCount.getCowCount().pipe(
                map(newCowCount => new LoadCowCountSuccess(newCowCount)),
                catchError(err => of(new LoadCowCountFail(err)))
            ))
    );

    @Effect()
    changeCowCount$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.CHANGE_COWCOWNT),
        mergeMap((action: any) =>
            this.cowCount.setCowCount(action.payload).pipe(
                map(newCowCount => new ChangeCowCountSuccess(newCowCount)),
                catchError(err => of(new LoadCowCountFail(err)))
            ))
    )

    @Effect({ dispatch: false })
    changeCowCountSuccess$: Observable<any> = this.action$.pipe(
        ofType(RationActionType.CHANGE_COWCOWNT_SUCCESS),
        tap((data) => {
            this.alertifyService.success("Количество голов успешно изменено!");
            this.router.navigateByUrl("/company/ration/selection-feel");
        })
    );

    @Effect()
    calculateRations$: Observable<Action> = this.action$.pipe(
        ofType(RationActionType.CALCULATE_RATIONS),
        mergeMap(action =>
            this.rations.calculateRations().pipe(
                map(rations => new LoadRationsSuccess(rations)),
                catchError(err => of(new LoadRationFail(err)))
            ))
    );
}
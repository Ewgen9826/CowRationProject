import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { map, catchError, tap, exhaustMap } from "rxjs/operators";

import { AuthenticationService } from "../../core/services/authentication.service";
import {
    AuthenticationActionTypes,
    Login, LoginSuccess,
    LoginFailure,
    Logout
} from "./authentication.actions";
import { AlertifyService } from "src/app/core/utils/alertify.service";

@Injectable()
export class AuthenticationEffect {
    constructor(
        private actions: Actions,
        private router: Router,
        private alertifyService: AlertifyService,
        private authenticationService: AuthenticationService
    ) { }

    @Effect()
    Login: Observable<any> = this.actions
        .pipe(
            ofType(AuthenticationActionTypes.LOGIN),
            map((action: Login) => action.payload),
            exhaustMap((payload) => {
                return this.authenticationService.login(payload.username, payload.password)
                    .pipe(
                        map((user: any) => {
                            return new LoginSuccess(user.token);
                        }),
                        catchError((error) => {
                            return of(new LoginFailure(error));
                        }));
            }));


    @Effect({ dispatch: false })
    LoginSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem("token", user.payload);
            this.alertifyService.success("Вы успешно авторизованы!");
            this.router.navigateByUrl("/company");
        })
    );

    @Effect({ dispatch: false })
    LoginFailure: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGIN_FAILURE),
        tap(err => {
            this.alertifyService.error("Неверный логин или пароль!");
        })
    );

    @Effect({ dispatch: false })
    public Logout: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem("token");
            this.alertifyService.success("Вы вышли из системы!");
            this.router.navigateByUrl("/login");
        })
    );
}
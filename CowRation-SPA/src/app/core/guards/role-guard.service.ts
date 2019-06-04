import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { tap } from "rxjs/operators";
import { isAuthenticatedUser } from "src/app/account-login/state";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AlertifyService } from "../utils/alertify.service";


@Injectable()
export class RoleGuardService implements CanActivate {
    jwtHelper = new JwtHelperService();
    constructor(
        private router: Router,
        private store: Store<AppState>,
        private alertify: AlertifyService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isAuthenticatedUser),
            tap(loggedIn => {
                const token = localStorage.getItem("token");
                const expectedRole = route.data.expectedRole;
                const payload = this.jwtHelper.decodeToken(token);

                if (!loggedIn || !payload.role !== expectedRole) {
                    this.alertify.error("У вас нет доступа к данной области приложения!");
                    this.router.navigateByUrl("/company");
                }
            })
        );
    }
}
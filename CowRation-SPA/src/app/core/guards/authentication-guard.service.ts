import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { isAuthenticatedUser } from "src/app/account-login/state";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AuthenticationGuardService implements CanActivate {

    constructor(
        private router: Router,
        private store: Store<AppState>) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isAuthenticatedUser),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl("/login");
                }
            })
        )
    }

}
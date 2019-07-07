import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { map, catchError, mergeMap } from "rxjs/operators";
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { UserActionsType, LoadingUsersSuccess, LoadingUsersFail, AddUser, AddUserSuccess, AddUserFail, RemoveUserSuccess, RemoveUserFail, RemoveUser } from './user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService) { }
    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(UserActionsType.LOADING_USERS),
        mergeMap(action =>
            this.userService.all().pipe(
                map(users => {
                    return new LoadingUsersSuccess(users)
                }),
                catchError(error => of(new LoadingUsersFail(error)))
            ))
    );

    @Effect()
    addUser$ = this.actions$.pipe(
        ofType(UserActionsType.ADD_USER),
        mergeMap((action: AddUser) =>
            this.userService.add(action.payload).pipe(
                map(user => new AddUserSuccess(user)),
                catchError(error => of(new AddUserFail(error)))
            ))
    );

    @Effect()
    removeUser$ = this.actions$.pipe(
        ofType(UserActionsType.REMOVE_USER),
        mergeMap((action: RemoveUser) =>
            this.userService.remove(action.payload).pipe(
                map(user => new RemoveUserSuccess(user)),
                catchError(error => of(new RemoveUserFail(error)))
            ))
    );
}
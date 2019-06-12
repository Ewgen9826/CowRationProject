import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthenticationState } from "./authentication.reducer";
import { JwtHelperService } from "@auth0/angular-jwt";

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>("authentication");

export const isAuthenticatedUser = createSelector(
    selectAuthenticationState,
    state => state.isAuthenticated
);

export const getUserToken = createSelector(
    selectAuthenticationState,
    state => {
        const jwtHelper = new JwtHelperService();
        return jwtHelper.decodeToken(state.token).nameid;
    }
<<<<<<< HEAD
)

export const getLoadingState = createSelector(
    selectAuthenticationState,
    state => state.loading
);
=======
)
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7

import { AuthenticationState, reducer } from "../account-login/state/authentication.reducer";

export interface AppState {
    authentication: AuthenticationState;
}

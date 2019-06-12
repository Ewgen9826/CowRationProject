import { User } from "../../core/models/user";
import { AuthenticationActionTypes, AuthenticationActions } from "../state/authentication.actions";

export interface AuthenticationState {
    isAuthenticated: boolean;
    token: string;
    errorMessage: string | null;
}

export const initialState: AuthenticationState = {
    isAuthenticated: localStorage.getItem("token") !== null,
    token: localStorage.getItem("token"),
    errorMessage: null
};

export function reducer(state = initialState, action: AuthenticationActions): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                errorMessage: null
            };
        }
        case AuthenticationActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: action.payload.message
            };
        }
        case AuthenticationActionTypes.LOGOUT: {
            return {
                isAuthenticated: false,
                token: null,
                errorMessage: ""
            }
        }
        default: {
            return state;
        }
    }
}
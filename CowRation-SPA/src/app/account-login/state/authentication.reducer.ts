import { UserRegister } from "../../core/models/user-register";
import { AuthenticationActionTypes, AuthenticationActions } from "../state/authentication.actions";

export interface AuthenticationState {
    isAuthenticated: boolean;
    token: string;
    errorMessage: string | null;
    loading: boolean;
}

export const initialState: AuthenticationState = {
    isAuthenticated: localStorage.getItem("token") !== null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    errorMessage: null,
    loading: false
};

export function reducer(state = initialState, action: AuthenticationActions): AuthenticationState {
    switch (action.type) {
        case AuthenticationActionTypes.LOGIN: {
            return {
                ...state,
                loading: true
            };
        }
        case AuthenticationActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                errorMessage: null,
                loading: false
            };
        }
        case AuthenticationActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: action.payload.message,
                loading: false
            };
        }
        case AuthenticationActionTypes.LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                errorMessage: "",
            }
        }
        default: {
            return state;
        }
    }
}
import { User } from "../../core/models/user";
import { AuthenticationActionTypes, AuthenticationActions } from "../state/authentication.actions";

export interface AuthenticationState {
    isAuthenticated: boolean;
    token: string;
    errorMessage: string | null;
<<<<<<< HEAD
    loading: boolean;
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
}

export const initialState: AuthenticationState = {
    isAuthenticated: localStorage.getItem("token") !== null,
    token: localStorage.getItem("token"),
<<<<<<< HEAD
    errorMessage: null,
    loading: false
=======
    errorMessage: null
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
};

export function reducer(state = initialState, action: AuthenticationActions): AuthenticationState {
    switch (action.type) {
<<<<<<< HEAD
        case AuthenticationActionTypes.LOGIN: {
            return {
                ...state,
                loading: true
            };
        }
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        case AuthenticationActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
<<<<<<< HEAD
                errorMessage: null,
                loading: false
=======
                errorMessage: null
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            };
        }
        case AuthenticationActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
<<<<<<< HEAD
                errorMessage: action.payload.message,
                loading: false
=======
                errorMessage: action.payload.message
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            };
        }
        case AuthenticationActionTypes.LOGOUT: {
            return {
<<<<<<< HEAD
                ...state,
                isAuthenticated: false,
                token: null,
                errorMessage: "",
=======
                isAuthenticated: false,
                token: null,
                errorMessage: ""
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
            }
        }
        default: {
            return state;
        }
    }
}
import { createReducer } from "redux-act";
import initialState from "./state";
import {
    signInStart,
    signInSuccess,
    signInError,
    signUpStart,
    signUpSuccess,
    signUpError,
    signInAsGuest,
    logout
} from "./actions";
import { AuthStateType, User } from "./types";

export const onSignInStart = (state: AuthStateType) => ({
    ...state,
    isLoading: true,
});

export const onSignInSuccess = (state: AuthStateType, payload: User) => ({
    ...state,
    currentUser: payload,
    isLoading: false,
});

export const onSignInError = (state: AuthStateType, payload: null) => ({
    ...initialState,
    error: payload,
});


export const onSignUpStart = (state: AuthStateType) => ({
    ...state,
    isLoading: true,
});

export const onSignUpSuccess = (state: AuthStateType, payload: User) => ({
    ...state,
    currentUser: payload,
    isLoading: false,
});

export const onSignUpError = (state: AuthStateType, payload: null) => ({
    ...initialState,
    error: payload,
});

export const onSignInAsGuest = (state: AuthStateType) => {
    const currentUser: User = {
        username: 'guest',
        type: 'guest'
    }
    return {
        ...state,
        currentUser
    };
}

export const onLogout = () => ({
    ...initialState,
});


export const authReducer = createReducer<AuthStateType>({}, initialState)
    .on(signInStart, onSignInStart)
    .on(signInSuccess, onSignInSuccess)
    .on(signInError, onSignInError)
    .on(signUpStart, onSignUpStart)
    .on(signUpSuccess, onSignUpSuccess)
    .on(signUpError, onSignUpError)
    .on(signInAsGuest, onSignInAsGuest)
    .on(logout, onLogout);

export default authReducer;

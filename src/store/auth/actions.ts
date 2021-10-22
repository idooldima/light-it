import { createAction } from "redux-act";
import { Credentials, User } from "./types";

export const signInStart = createAction<Credentials>("SIGN_IN_START");
export const signInSuccess = createAction<User>("SIGN_IN_SUCCESS");
export const signInError = createAction<null>("SIGN_IN_ERROR");

export const signUpStart = createAction<Credentials>("SIGN_UP_START")
export const signUpSuccess = createAction<User>("SIGN_UP_SUCCESS");
export const signUpError = createAction<null>("SIGN_UP_ERROR");

export const signInAsGuest = createAction('SIGN_IN_AS_GUEST')

export const logout = createAction("LOGOUT")
import { ReduxStoreType } from "../types";
import { ErrorType, User } from "./types";

export const currentUserSelector = (state: ReduxStoreType): User | null =>
    state.auth.currentUser;

export const isAuthUserLoadingSelector = (state: ReduxStoreType): boolean =>
    state.auth.isLoading;

export const authErrorSelector = (state: ReduxStoreType): ErrorType | null =>
    state.auth.error
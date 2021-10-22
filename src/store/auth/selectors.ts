import { ReduxStoreType } from "../types";
import { User } from "./types";

export const currentUserSelector = (state: ReduxStoreType): User | null =>
    state.auth.currentUser;

export const isAuthUserLoadingSelector = (state: ReduxStoreType): boolean =>
    state.auth.isLoading;

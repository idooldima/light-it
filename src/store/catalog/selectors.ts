import { ReduxStoreType } from "../types";
import { Products } from "./types";

export const catalogProductssSelector = (state: ReduxStoreType): Products =>
    state.catalog.products;

export const catalogIsLoadingSelector = (state: ReduxStoreType): boolean =>
    state.catalog.isLoading;


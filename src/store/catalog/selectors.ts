import { find } from "lodash";
import { ReduxStoreType } from "../types";
import { Products, ProductType } from "./types";

export const catalogProductsSelector = (state: ReduxStoreType): Products =>
    state.catalog.products;

export const catalogIsLoadingSelector = (state: ReduxStoreType): boolean =>
    state.catalog.isLoading;

export const getProductByIdSelector = (state: ReduxStoreType, id: number): ProductType | undefined =>
    find(state.catalog.products, (product) =>
        id === +product.id
    )
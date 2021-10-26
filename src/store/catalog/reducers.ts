import { createReducer } from "redux-act";
import initialState from "./state";
import {
    getProductsStart,
    getProductsSuccess,
    getProductsError,
    resetProducts,
} from "./actions";
import { CatalogStateType, Products } from "./types";

export const onGetProductsStart = (state: CatalogStateType) => ({
    ...state,
    isLoading: true,
});

export const onGetProductsSuccess = (state: CatalogStateType, payload: { products: Products }) => ({
    ...state,
    products: payload.products,
    isLoading: false,
});

export const onGetProductsError = (state: CatalogStateType, payload: null) => ({
    ...initialState,
    error: payload,
});

export const onResetProducts = (state: CatalogStateType) => ({
    ...initialState,
});

export const catalogReducer = createReducer<CatalogStateType>({}, initialState)
    .on(getProductsStart, onGetProductsStart)
    .on(getProductsSuccess, onGetProductsSuccess)
    .on(getProductsError, onGetProductsError)
    .on(resetProducts, onResetProducts)

export default catalogReducer;

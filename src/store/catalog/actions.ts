import { createAction } from "redux-act";
import { Products } from "./types"

export const getProductsStart = createAction("GET_PRODUCTS_START");
export const getProductsSuccess = createAction<{ products: Products, }>("GET_PRODUCTS_SUCCESS")
export const getProductsError = createAction<null>("GET_PRODUCTS_ERROR")

export const resetProducts = createAction("RESET_PRODUCTS")
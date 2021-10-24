import { createAction } from "redux-act";
import { GetReviewsPayload, Reviews } from "./types";

export const getReviewsStart = createAction<GetReviewsPayload>('GET_PRODUCT_START');
export const getReviewsSuccess = createAction<Reviews>('GET_REVIEWS_SUCCESS')
export const getReviewsError = createAction<null>('GET_REVIEWS_ERROR')

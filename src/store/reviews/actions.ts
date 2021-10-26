import { createAction } from "redux-act";
import { GetReviewsPayload, Review, Reviews, } from "./types";

export const getReviewsStart = createAction<GetReviewsPayload>('GET_PRODUCT_START');
export const getReviewsSuccess = createAction<Reviews>('GET_REVIEWS_SUCCESS')
export const getReviewsError = createAction<null>('GET_REVIEWS_ERROR')

export const sendCommentStart = createAction<Review>('SEND_COMMENT_START')
export const sendCommentuccess = createAction('SEND_COMMENT_SUCCESS')
export const sendCommentError = createAction<null>('SEND_COMMENT_ERROR')
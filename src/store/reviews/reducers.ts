import { createReducer } from "redux-act";
import initialState from "./state";
import {
    getReviewsStart,
    getReviewsSuccess,
    getReviewsError
} from "./actions";
import { Reviews, ReviewStateType } from "./types";

export const onGetReviewsStart = (state: ReviewStateType) => ({
    ...state,
    isLoading: true,
});

export const onGetReviewsSuccess = (state: ReviewStateType, payload: Reviews) => ({
    ...state,
    reviews: payload,
    isLoading: false,
});

export const onGetReviewsError = (state: ReviewStateType, payload: null) => ({
    ...initialState,
    error: payload,
});


export const reviewsReducer = createReducer<ReviewStateType>({}, initialState)
    .on(getReviewsStart, onGetReviewsStart)
    .on(getReviewsSuccess, onGetReviewsSuccess)
    .on(getReviewsError, onGetReviewsError)

export default reviewsReducer;


import { createReducer } from "redux-act";
import initialState from "./state";
import {
    getReviewsStart,
    getReviewsSuccess,
    getReviewsError,
    sendCommentStart,
    sendCommentuccess,
    sendCommentError
} from "./actions";
import { Review, Reviews, ReviewStateType, } from "./types";

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

export const onSendCommentStart = (state: ReviewStateType, payload: Review) => ({
    ...state,
    reviews: [...state.reviews, payload]
})

export const onSendCommentSuccess = (state: ReviewStateType) => ({
    ...state
})

export const onSendCommentError = (state: ReviewStateType) => ({
    ...state,
    reviews: state.reviews.slice(0, state.reviews.length - 1)
})


export const reviewsReducer = createReducer<ReviewStateType>({}, initialState)
    .on(getReviewsStart, onGetReviewsStart)
    .on(getReviewsSuccess, onGetReviewsSuccess)
    .on(getReviewsError, onGetReviewsError)
    .on(sendCommentStart, onSendCommentStart)
    .on(sendCommentuccess, onSendCommentSuccess)
    .on(sendCommentError, onSendCommentError)


export default reviewsReducer;


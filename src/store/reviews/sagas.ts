import axios from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { currentUserSelector } from "../auth/selectors";
import { SagaActionType } from "../types";
import {
    getReviewsStart,
    getReviewsSuccess,
    getReviewsError,
    sendCommentuccess,
    sendCommentError,
    sendCommentStart,
} from "./actions";
import { GetReviewsPayload, Review } from "./types";

export const getReviewsSaga = function* ({
    payload: { productId },
}: SagaActionType<GetReviewsPayload>): SagaIterator {
    try {
        const result = yield call(axios.get,
            `http://smktesting.herokuapp.com/api/reviews/${productId}`);

        yield put(getReviewsSuccess(
            result.data,
        ));

    } catch (error: any) {
        yield put(getReviewsError(error));
    }
};

export const getCommentSaga = function* ({
    payload
}: SagaActionType<Review>): SagaIterator {
    try {
        const user = yield select(
            currentUserSelector
        );
        const result = yield call(axios.post,
            `http://smktesting.herokuapp.com/api/reviews/${payload.product}`, { ...payload }, { headers: { Authorization: `Token ${user.token}` } });

        yield put(sendCommentuccess(
        ));

    } catch (error: any) {
        yield put(sendCommentError(error));
    }
};


export default function* root() {
    yield takeLatest(getReviewsStart, getReviewsSaga);
    yield takeLatest(sendCommentStart, getCommentSaga);
}


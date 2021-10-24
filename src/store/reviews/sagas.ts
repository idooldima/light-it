import axios from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { SagaActionType } from "../types";
import {
    getReviewsStart,
    getReviewsSuccess,
    getReviewsError,
} from "./actions";
import { GetReviewsPayload } from "./types";

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

export default function* root() {
    yield takeLatest(getReviewsStart, getReviewsSaga);
}


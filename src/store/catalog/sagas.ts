import axios from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, select } from "redux-saga/effects";
import {
    getProductsStart,
    getProductsSuccess,
    getProductsError,
} from "./actions";


export const getProductsSaga = function* (): SagaIterator {
    try {
        const result = yield call(axios.get,
            'http://smktesting.herokuapp.com/api/products/');;
        yield put(getProductsSuccess({
            products: result.data,
        }));
    } catch (error: any) {
        yield put(getProductsError(error));
    }
};

export default function* root() {
    yield takeLatest(getProductsStart, getProductsSaga);
}

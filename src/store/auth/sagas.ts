import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
    signInError,
    signInStart,
    signInSuccess,
    signUpStart,
    signUpSuccess,
    signUpError,
} from "./actions";
import { SagaActionType } from "../types";
import { SignInPayload } from "./types";
// import { push } from 'react-router-redux';
import axios from "axios";
import routes from "../../routes";
import history from "../../history";

export const signInSaga = function* ({
    payload: { username, password },
}: SagaActionType<SignInPayload>): SagaIterator {
    try {
        const result = yield call(
            axios.post,
            'http://smktesting.herokuapp.com/api/login/',
            { username, password }

        );
        yield put(signInSuccess({
            username,
            token: result.data.token,
            type: 'user'
        }));
        history.push(routes.products.path)
    } catch (error: any) {
        yield put(signInError(error));
    }
};


export const signUpSaga = function* ({
    payload: { username, password },
}: SagaActionType<SignInPayload>): SagaIterator {
    try {
        const result = yield call(
            axios.post,
            'http://smktesting.herokuapp.com/api/register/',
            { username, password }

        );
        console.log(result)
        yield put(signUpSuccess({
            username,
            token: result.data.token,
            type: 'user'
        }));
    } catch (error: any) {
        yield put(signUpError(error));
    }
};


export default function* root() {
    yield takeLatest(signInStart, signInSaga);
    yield takeLatest(signUpStart, signUpSaga)
}


//sdsddsdd
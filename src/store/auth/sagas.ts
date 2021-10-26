import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
    signInError,
    signInStart,
    signInSuccess,
    signUpStart,
    signUpSuccess,
    signUpError,
    signInAsGuest,
    logout,
} from "./actions";
import { SagaActionType } from "../types";
import { Credentials, User } from "./types";
import axios from "axios";
import routes from "../../routes";
import history from "../../history";
import { setSessionStorage } from "../../lib";

export const signInSaga = function* ({
    payload: { username, password },
}: SagaActionType<Credentials>): SagaIterator {
    try {

        const result = yield call(
            axios.post,
            'http://smktesting.herokuapp.com/api/login/',
            { username, password }

        );
        if (!result.data.success) {
            throw { message: result.data.message || 'Something went wrong. Try again' }
        }
        const user: User = {
            username,
            token: result.data.token,
            type: 'user'
        }
        yield put(signInSuccess(user));
        setSessionStorage('currentUser', user)
        history.push(routes.products.path)
    } catch (error: any) {
        yield put(signInError(error));
    }
};


export const signUpSaga = function* ({
    payload: { username, password },
}: SagaActionType<Credentials>): SagaIterator {
    try {
        const result = yield call(
            axios.post,
            'http://smktesting.herokuapp.com/api/register/',
            { username, password }

        );
        if (!result.data.success) {
            throw { message: result.data.message || 'Something went wrong. Try again' }
        }
        const user: User = {
            username,
            token: result.data.token,
            type: 'user'
        }
        yield put(signUpSuccess(user));
        setSessionStorage('currentUser', user)
        history.push(routes.products.path)
    } catch (error: any) {
        yield put(signUpError(error));
    }
};

export const signInAsGuestSaga = function* () {
    yield call(setSessionStorage, 'currentUser', { type: 'guest', username: 'guest' })
    history.push(routes.products.path)
}

export const logoutSaga = function* () {
    yield call(setSessionStorage, 'currentUser', null)
}


export default function* root() {
    yield takeLatest(signInStart, signInSaga);
    yield takeLatest(signUpStart, signUpSaga)
    yield takeLatest(signInAsGuest, signInAsGuestSaga)
    yield takeLatest(logout, logoutSaga)
}



import { all, fork } from "redux-saga/effects";
import auth from "./auth/sagas";
import catalog from './catalog/sagas'

export default function* root() {
    yield all([fork(auth)]);
    yield all([fork(catalog)])
}

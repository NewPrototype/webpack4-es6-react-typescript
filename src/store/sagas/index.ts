import { take, fork, call, put, all, takeEvery } from 'redux-saga/effects';

import {  callTakeLatest } from 'util/callTake';
import Login from 'ax/login'

import Act from 'store/actions'

function* watchIncrementAsync() {
    yield callTakeLatest(Act.INIT, function* (action:{cb:Function}) {
        const list= yield call(Login.login, { a: 1 })
        action.cb(list)
    })
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ])
}
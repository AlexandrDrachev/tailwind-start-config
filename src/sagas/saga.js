import { put, all, call, take } from 'redux-saga/effects';

import { autorisationTest } from "../actions/action";

import {watchCurrentCity, watchNewLocation, watchWeatherToday} from "../components/weathers/sagas/locations-saga";
import { watchCoordsFunc } from "../components/weathers/sagas/locations-saga";

export function* rootSagas() {
    yield all([
        watchCoordsFunc(),
        takeAutorisation(),
        watchCurrentCity(),
        watchNewLocation(),
        watchWeatherToday()
    ]);
}

function* takeAutorisation() {
    while (true) {
        yield take('SAGA_TAKE_AUTORISATION');
        yield call(sagaTestAutorisation);
    }
}

function* sagaTestAutorisation() {
    yield put(autorisationTest());
}





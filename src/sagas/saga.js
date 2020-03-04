import { put, all, call, delay, take } from 'redux-saga/effects';

import { autorisationTest } from "../actions/action";
import { getLatitudeCity, getLongitudeCity } from "../components/weathers/weather-actions";

import {watchCurrentCity, watchNewLocation} from "../components/weathers/sagas/locations-saga";
import { watchCoordsFunc } from "../components/weathers/sagas/locations-saga";

export function* rootSagas() {
    yield all([
        watchCoordsFunc(),
        takeAutorisation(),
        watchCurrentCity(),
        watchNewLocation()
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





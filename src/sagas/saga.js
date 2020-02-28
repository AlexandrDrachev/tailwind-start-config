import { put, all, call, delay, take } from 'redux-saga/effects';

import { getLatitudeCity, getLongitudeCity, autorisationTest } from "../actions/action";

export function* rootSagas() {
    yield all([
        watchCoordsFunc(),
        takeAutorisation()
    ]);
}

let lat;
let lng;
navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
});


function* watchCoordsFunc() {

    if (!lat || !lng) {
        yield delay(1000);
    }
    yield all([
        yield put(getLatitudeCity(lat)),
        yield put(getLongitudeCity(lng))
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



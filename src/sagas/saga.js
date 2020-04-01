import { put, all, call, take } from 'redux-saga/effects';

import { autorisationTest } from "../actions/action";

import {
    watchNewLocation,
    watchWeatherForcast,
    watchWeatherToday,
    watchWeatherDetails,
    watchUpdateWeatherForcast
} from "../components/weathers/sagas/locations-saga";
import { watchCoordsFunc, watchGetCountriesFromSelect, watchGetCitiesFromSelect,
    watchGetStatesFromSelect } from "../components/weathers/sagas/locations-saga";
import { watchGetAutorisation, watchGetRegistration, watchAutorisationQuest } from "../components/autorisation/autorisation-saga";

export function* rootSagas() {
    yield all([
        watchCoordsFunc(),
        takeAutorisation(),
        watchNewLocation(),
        watchWeatherToday(),
        watchWeatherForcast(),
        watchWeatherDetails(),
        watchUpdateWeatherForcast(),
        watchGetAutorisation(),
        watchGetRegistration(),
        watchAutorisationQuest(),
        watchGetCountriesFromSelect(),
        watchGetStatesFromSelect(),
        watchGetCitiesFromSelect()
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





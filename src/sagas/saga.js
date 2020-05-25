import { put, all, call, take } from 'redux-saga/effects';

import { autorisationTest } from "../actions/action";

import {
    watchNewLocation,
    watchWeatherForcast,
    watchWeatherToday,
    watchWeatherDetails,
    watchUpdateWeatherForcast
} from "../components/weathers/sagas/locations-saga";

import {
    watchCoordsFunc,
    watchGetCountriesFromSelect,
    watchGetCitiesFromSelect,
    watchGetStatesFromSelect
} from "../components/weathers/sagas/locations-saga";

import {
    watchGetAutorisation,
    watchGetRegistration,
    watcherRegistrationNewUser,
    watchAutorisationQuest
} from "../components/autorisation/autorisation-saga";

import {
    watchPartner1SagaTest,
    watcherGetStartOfRest,
    watcherPrevOrNextMonth,
    watcherGetStartDateOfRest,
    watcherGetEndDateOfRest,
    watcherGetAllDaysOfRest,
    watcherGetCostCalculation
} from "../components/partners/partner1/partner1-saga";

import { watcherGetNewMessage, watcherGetActiveChat } from '../components/partners/partner3/partner3-saga';

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
        watcherRegistrationNewUser(),
        watchAutorisationQuest(),
        watchGetCountriesFromSelect(),
        watchGetStatesFromSelect(),
        watchGetCitiesFromSelect(),
        watchPartner1SagaTest(),
        watcherGetStartOfRest(),
        watcherPrevOrNextMonth(),
        watcherGetStartDateOfRest(),
        watcherGetEndDateOfRest(),
        watcherGetAllDaysOfRest(),
        watcherGetCostCalculation(),
        watcherGetNewMessage(),
        watcherGetActiveChat()
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





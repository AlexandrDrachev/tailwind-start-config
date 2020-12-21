import { call, put, take, select } from "redux-saga/effects";
import {
    getNewLocationSaga, getSelectCountrySaga, getSelectCitiesSaga,
    getNewWeatherTodaySaga, getWeatherForcastSaga, getWeatherDetailsSaga, getSelectStateSaga
} from "../weather-actions";
import ServiceApi from "../../../services/service-api";

const serviceApi = new ServiceApi();
const { getCityCoords, getCityFromCoords, getWeatherCityFromCoords,
    getWeatherForcast, getSelectCountry, getRapidLocation, getSelectState, getSelectCity } = serviceApi;

export function* watchCoordsFunc() {
    let latAndLng = {
        lat: 40.71,
        lng: -74.01
    };

    // navigator.geolocation.getCurrentPosition((position) => {
    //     latAndLng.lat = position.coords.latitude;
    //     latAndLng.lng = position.coords.longitude;
    // });
    // const { lat, lng } = latAndLng;
    // if (!lat || !lng) {
    //     yield delay(1000);
    //     latAndLng.lat = 50.449988;
    //     latAndLng.lng = 30.523494;
    // }
    const res = yield call(getCityFromCoords, latAndLng);
    yield put(getNewLocationSaga(res));
}

//get city name from select
export function* watchGetCountriesFromSelect() {
    while (true) {
        yield take("GET_SELECT_COUNTRY_ACTION");
        let countries = yield call(getSelectCountry);
        // const countries = countriesRes.map((country) => country.name);
        yield put(getSelectCountrySaga(countries));
    }
}

export function* watchGetStatesFromSelect() {
    while (true) {
        const { payload } = yield take("GET_SELECT_STATES_ACTION");
        // const states = yield call(getRapidLocation, payload);
        const states = yield call(getSelectState, payload);
        console.log('states: ', states);
        yield put(getSelectStateSaga(states));
    }
}

export function* watchGetCitiesFromSelect() {
    while (true) {
        const { payload } = yield take("GET_SELECT_CITIES_ACTION");
        const cities = yield call(getSelectCity, payload);
        yield put(getSelectCitiesSaga(cities));

    }
}

//get coords city from city name (geocoding)
export function* watchNewLocation() {
    while (true) {
        const { payload } = yield take("GET_NEW_LOCATION");
        yield call(workerGetNewCity, payload);
    }
}

function* workerGetNewCity(city) {
    const res = yield call(getCityCoords, city);
    yield put(getNewLocationSaga(res));
}

//get weathers
export function* watchWeatherToday() {
    while (true) {
        const { payload } = yield take("GET_NEW_WEATHER_TODAY");
        yield call(workerWeatherToday, payload);
    }
}

function* workerWeatherToday(payload) {
    const newWeather = yield call(getWeatherCityFromCoords, payload);
    yield put(getNewWeatherTodaySaga(newWeather));
}

export function* watchWeatherForcast() {
    while (true) {
        const { payload } = yield take(["GET_WEATHER_FORCAST_ACTION"]);
        const weatherArr = yield call(getWeatherForcast, payload);
        yield call(workerWeatherForcast, weatherArr);
    }
}

function* workerWeatherForcast(weatherArr) {
    const filterWeatherForcast = weatherArr.filter((weather) => {
         return new Date(weather.date).getHours() === 15;
    });
    yield put(getWeatherForcastSaga(filterWeatherForcast));
}

export function* watchUpdateWeatherForcast() {
    const payload = yield take("GET_UPDATE_WEATHER_FORCAST_ACTION");
    const weatherArr = yield call(getWeatherForcast, payload);
    yield call(workerWeatherForcast, weatherArr);
}

//get weather details for initialisation bckg-image app

export function* watchWeatherDetails() {
    while (true) {
        yield take("GET_WEATHER_DETAILS");
        yield call(workerWeatherDetails);
    }
}

function* workerWeatherDetails() {
    const state  = yield select();
    const { locationsState: { weatherDetails, weatherToday } } = state;
    const newWeatherDetails = JSON.parse(JSON.stringify(weatherDetails));
    newWeatherDetails.day = (new Date().getHours() >= 6 && new Date().getHours()) < 18;
    newWeatherDetails.night = (new Date().getHours() < 6 || new Date().getHours()) >= 18;
    newWeatherDetails.snow = weatherToday ? (weatherToday.description  === 'snow' || weatherToday.description === 'light snow') : null;
    newWeatherDetails.rain = weatherToday ? (weatherToday.description  === 'rain' || weatherToday.description === 'light rain') : null;
    newWeatherDetails.summer = (new Date().getMonth() >= 5 && new Date().getMonth() <= 7);
    newWeatherDetails.autumn = (new Date().getMonth() >= 8 && new Date().getMonth() <= 10);
    newWeatherDetails.winter = (new Date().getMonth() === 11 || new Date().getMonth() <= 0 || new Date().getMonth() === 1);
    newWeatherDetails.spring = (new Date().getMonth() >= 2 && new Date().getMonth() <= 4);
    yield put(getWeatherDetailsSaga(newWeatherDetails));
}


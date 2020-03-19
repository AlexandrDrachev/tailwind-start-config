import { call, delay, put, take, select } from "redux-saga/effects";
import { getInputCitySaga, getNewLocationSaga, getNewWeatherTodaySaga, getWeatherForcastSaga, getWeatherDetailsSaga } from "../weather-actions";
import ServiceApi from "../../../services/service-api";

let latAndLng = {
    lat: null,
    lng: null
};

navigator.geolocation.getCurrentPosition((position) => {
    latAndLng.lat = position.coords.latitude;
    latAndLng.lng = position.coords.longitude;
});

const serviceApi = new ServiceApi();
const { getCityCoords, getCityFromCoords, getWeatherCityFromCoords, getWeatherForcast } = serviceApi;


export function* watchCoordsFunc() {
    const { lat, lng } = latAndLng;
    if (!lat || !lng) {
        yield delay(1000);
    }
    const res = yield call(getCityFromCoords, latAndLng);
    yield put(getNewLocationSaga(res));
}

//get city name from input
export function* watchCurrentCity() {
    while (true) {
        const { payload } = yield take("GET_INPUT_CITY");
        yield call(handleInput, payload);
    }
}

function* handleInput(city) {
    yield put(getInputCitySaga(city));
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


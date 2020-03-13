import { call, delay, put, take, all, fork } from "redux-saga/effects";
import { getInputCitySaga, getLatitudeCity, getLongitudeCity, getNewLocationSaga, getNewWeatherTodaySaga } from "../weather-actions";
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
const { getCityCoords, getCityFromCoords, getWeatherCityFromCoords } = serviceApi;


export function* watchCoordsFunc() {
    const { lat, lng } = latAndLng;
    if (!lat || !lng) {
        yield delay(1000);
    }
    // yield all([
    //     yield put(getLatitudeCity(lat)),
    //     yield put(getLongitudeCity(lng))
    // ]);
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
    console.log(city);
    yield put(getInputCitySaga(city));
}

//get coords city from city name (geocoding)
export function* watchNewLocation() {
    while (true) {
        const { payload } = yield take("GET_NEW_LOCATION");
        console.log('city from GET_NEW_LOCATION:', payload);
        yield call(workerGetNewCity, payload);
    }
}

function* workerGetNewCity(city) {
    console.log('city from saga:', city);
    const res = yield call(getCityCoords, city);
    yield put(getNewLocationSaga(res));
    // yield all([
    //     yield put(getLatitudeCity(res.latitude)),
    //     yield put(getLongitudeCity(res.longitude))
    // ]);
}

export function* watchWeatherToday() {
    while (true) {
        const { payload } = yield take("GET_NEW_WEATHER_TODAY");
        console.log('payload: ', payload);
        yield call(workerWeatherToday, payload);
    }
}

function* workerWeatherToday(payload) {
    const newWeather = yield call(getWeatherCityFromCoords, payload);
    yield put(getNewWeatherTodaySaga(newWeather));
}
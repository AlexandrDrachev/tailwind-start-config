import { call, delay, put, take } from "redux-saga/effects";
import { getCurrentCitySaga } from "../../../actions/action";


export function* watchCurrentCity() {
    while (true) {
        const { payload } = yield take("GET_CURRENT_CITY");
        yield call(handleInput, payload);
        yield delay(500);
    }
}

function* handleInput(city) {
    yield put(getCurrentCitySaga(city));
}
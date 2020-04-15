import { take, put, call, fork, race, select } from 'redux-saga/effects';

import {
    partner1StateTestSaga,
    getStartMonthSaga,
    getEndMonthSaga,
    getCurrentMonthSaga,
    getStartOfRestSaga,
    startOfRestErrorSaga
} from './partner1-action';
import ServiceApi from '../../../services/service-api';
const _ = require("lodash");

//check partner1-saga connection
const serviceApi = new ServiceApi();

export function* watchPartner1SagaTest() {
    while (true) {
        yield take("PARTNER_1_STATE_TEST_ACTION");
        yield put(partner1StateTestSaga());
    }
}

let currentMonth = new Date().getMonth();

export function* watcherGetStartOfRest() {
    while (true) {
        yield take("GET_START_OF_REST_ACTION");
        const fullMonth = [];
        const getFullMonth = (yeahr, month, day) => {
            const oneDayFromMonth = new Date(yeahr, month, day);
            fullMonth.push(oneDayFromMonth);
        };
        for (let i = 1; i <=31; i++) {
            getFullMonth(new Date().getFullYear(), currentMonth, i)
        }
        let groupMonth = _.groupBy(fullMonth, (month) => {
            return new Date(month).getMonth();
        });
        let resultMonth = _.find(groupMonth, (i) => i.length >=28);

        const getShowResultMonth = () => {
            return resultMonth.map((day, idx) => {
                return {
                    id: idx,
                    year: new Date(day).getFullYear(),
                    month: serviceApi.getMonthTransform(new Date(day).getMonth()),
                    indexMonth: new Date(day).getMonth(),
                    date: new Date(day).getDate(),
                    day: serviceApi.getDayFromForcast(new Date(day)),
                    indexDay: new Date(day).getDay(),
                    fullResult: day
                };
            });
        };
        const result = yield call(getShowResultMonth);
        yield put(getCurrentMonthSaga(result));
        yield put(getStartMonthSaga(result));
        yield put(getEndMonthSaga(result));
        console.log('saga iteration complete!');
    }
}

export function* watcherPrevOrNextMonth() {
    while (true) {
        const action = yield take([
            "GET_PREV_START_MONTH_ACTION",
            "GET_NEXT_START_MONTH_ACTION",
            "GET_PREV_END_MONTH_ACTION",
            "GET_NEXT_END_MONTH_ACTION"
        ]);
        if (action.type === "GET_PREV_START_MONTH_ACTION") {
            yield call(workerGetPrevStartMonth);
        }
        if (action.type === "GET_PREV_END_MONTH_ACTION") {
            yield call(workerGetPrevEndMonth);
        }
        if (action.type === "GET_NEXT_START_MONTH_ACTION") {
            yield call(workerGetNextStartMonth);
        }
        if (action.type === "GET_NEXT_END_MONTH_ACTION") {
            yield call(workerGetNextEndMonth);
        }
    }
}

function* workerGetPrevStartMonth() {
    const currentMonth = JSON.parse(JSON.stringify(yield select(state => state.partner1State.startMonth)));
    const { year, indexMonth } = currentMonth[0];
    const nextMonth = new Date(year, indexMonth, -2);
    const fullMonth = [];
    const getFullMonth = (nextMonth, day) => {
        const oneDayFromMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
        fullMonth.push(oneDayFromMonth);
    };
    for (let i = 1; i <=31; i++) {
        getFullMonth(nextMonth, i)
    }
    let groupMonth = _.groupBy(fullMonth, (month) => {
        return new Date(month).getMonth();
    });
    let resultMonth = _.find(groupMonth, (i) => i.length >=28);

    const getShowResultMonth = () => {
        return resultMonth.map((day, idx) => {
            return {
                id: idx,
                year: new Date(day).getFullYear(),
                month: serviceApi.getMonthTransform(new Date(day).getMonth()),
                indexMonth: new Date(day).getMonth(),
                date: new Date(day).getDate(),
                day: serviceApi.getDayFromForcast(new Date(day)),
                indexDay: new Date(day).getDay(),
                fullResult: day
            };
        });
    };
    const result = yield call(getShowResultMonth);
    yield put(getStartMonthSaga(result));
}

function* workerGetPrevEndMonth() {
    const currentMonth = JSON.parse(JSON.stringify(yield select(state => state.partner1State.endMonth)));
    const { year, indexMonth } = currentMonth[0];
    const nextMonth = new Date(year, indexMonth, -2);
    const fullMonth = [];
    const getFullMonth = (nextMonth, day) => {
        const oneDayFromMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
        fullMonth.push(oneDayFromMonth);
    };
    for (let i = 1; i <=31; i++) {
        getFullMonth(nextMonth, i)
    }
    let groupMonth = _.groupBy(fullMonth, (month) => {
        return new Date(month).getMonth();
    });
    let resultMonth = _.find(groupMonth, (i) => i.length >=28);

    const getShowResultMonth = () => {
        return resultMonth.map((day, idx) => {
            return {
                id: idx,
                year: new Date(day).getFullYear(),
                month: serviceApi.getMonthTransform(new Date(day).getMonth()),
                indexMonth: new Date(day).getMonth(),
                date: new Date(day).getDate(),
                day: serviceApi.getDayFromForcast(new Date(day)),
                indexDay: new Date(day).getDay(),
                fullResult: day
            };
        });
    };
    const result = yield call(getShowResultMonth);
    yield put(getEndMonthSaga(result));
}

function* workerGetNextStartMonth() {
    const currentMonth = JSON.parse(JSON.stringify(yield select(state => state.partner1State.startMonth)));
    const { year, indexMonth } = currentMonth[0];
    const nextMonth = new Date(year, indexMonth, 32);
    const fullMonth = [];
    const getFullMonth = (nextMonth, day) => {
        const oneDayFromMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
        fullMonth.push(oneDayFromMonth);
    };
    for (let i = 1; i <=31; i++) {
        getFullMonth(nextMonth, i)
    }
    let groupMonth = _.groupBy(fullMonth, (month) => {
        return new Date(month).getMonth();
    });
    let resultMonth = _.find(groupMonth, (i) => i.length >=28);

    const getShowResultMonth = () => {
        return resultMonth.map((day, idx) => {
            return {
                id: idx,
                year: new Date(day).getFullYear(),
                month: serviceApi.getMonthTransform(new Date(day).getMonth()),
                indexMonth: new Date(day).getMonth(),
                date: new Date(day).getDate(),
                day: serviceApi.getDayFromForcast(new Date(day)),
                indexDay: new Date(day).getDay(),
                fullResult: day
            };
        });
    };
    const result = yield call(getShowResultMonth);
    yield put(getStartMonthSaga(result));
}

function* workerGetNextEndMonth() {
    const currentMonth = JSON.parse(JSON.stringify(yield select(state => state.partner1State.endMonth)));
    const { year, indexMonth } = currentMonth[0];
    const nextMonth = new Date(year, indexMonth, 32);
    const fullMonth = [];
    const getFullMonth = (nextMonth, day) => {
        const oneDayFromMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
        fullMonth.push(oneDayFromMonth);
    };
    for (let i = 1; i <=31; i++) {
        getFullMonth(nextMonth, i)
    }
    let groupMonth = _.groupBy(fullMonth, (month) => {
        return new Date(month).getMonth();
    });
    let resultMonth = _.find(groupMonth, (i) => i.length >=28);

    const getShowResultMonth = () => {
        return resultMonth.map((day, idx) => {
            return {
                id: idx,
                year: new Date(day).getFullYear(),
                month: serviceApi.getMonthTransform(new Date(day).getMonth()),
                indexMonth: new Date(day).getMonth(),
                date: new Date(day).getDate(),
                day: serviceApi.getDayFromForcast(new Date(day)),
                indexDay: new Date(day).getDay(),
                fullResult: day
            };
        });
    };
    const result = yield call(getShowResultMonth);
    yield put(getEndMonthSaga(result));
}

export function* watcherGetStartDateOfRest() {
    while (true) {
        console.log('start watcherGetStartDateOfRest iteration...');
        const { payload } = yield take("GET_START_DATE_OF_REST_ACTION");
        const { year, month, date } = payload;

        const startDateObj = {
            year: new Date(year, month, date).getFullYear(),
            indexMonth: new Date(year, month, date).getMonth(),
            month: serviceApi.getMonthTransform(new Date(year, month, date).getMonth()),
            date: new Date(year, month, date).getDate(),
            indexDay: new Date(year, month, date).getDay(),
            day: serviceApi.getDayFromForcast(new Date(year, month, date))
        };
        const currentMonth = yield select(state => state.partner1State.currentMonth);
        const date1 = new Date(currentMonth[0].year, currentMonth[0].indexMonth, new Date().getDate());
        const date2 = new Date(startDateObj.year, startDateObj.indexMonth, startDateObj.date);
        console.log('date1 > date2 ?', date1 > date2);

        // const action = yield take(["GET_START_OF_REST_SAGA", "START_OF_REST_ERROR_SAGA"]);

        if (
            new Date(currentMonth[0].year, currentMonth[0].indexMonth, new Date().getDate()) >=
            new Date(startDateObj.year, startDateObj.indexMonth, startDateObj.date)) {
            yield put(startOfRestErrorSaga(true));
        } else {
            yield put(getStartOfRestSaga(startDateObj));
        }
        console.log('watcherGetStartDateOfRest iteration complete!');
    }
}
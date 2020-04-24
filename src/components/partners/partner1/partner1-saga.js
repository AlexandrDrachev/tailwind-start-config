import { take, put, call, select } from 'redux-saga/effects';

import {
    partner1StateTestSaga,
    getStartMonthSaga,
    getEndMonthSaga,
    getCurrentMonthSaga,
    getStartOfRestSaga,
    startOfRestErrorSaga,
    getEndOfRestSaga,
    getAllDaysOfRestSaga,
    getCostCalculationSaga
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
        const currentMonth = yield select(state => state.partner1State.startMonth);
        const endOfRest = yield select(state => state.partner1State.endOfRest);

        if (
            new Date(currentMonth[0].year, currentMonth[0].indexMonth, new Date().getDate()) >=
            new Date(startDateObj.year, startDateObj.indexMonth, startDateObj.date)) {
            yield put(startOfRestErrorSaga(true));
        } else if (endOfRest && new Date(endOfRest.year, endOfRest.indexMonth, endOfRest.date) <=
                new Date(startDateObj.year, startDateObj.indexMonth, startDateObj.date)) {
            yield put(startOfRestErrorSaga(true));
        } else {
            yield put(getStartOfRestSaga(startDateObj));
        }
    }
}

export function* watcherGetEndDateOfRest() {
    while (true) {
        const { payload } = yield take("GET_END_DATE_OF_REST_ACTION");
        const { year, month, date } = payload;

        const endDateObj = {
            year: new Date(year, month, date).getFullYear(),
            indexMonth: new Date(year, month, date).getMonth(),
            month: serviceApi.getMonthTransform(new Date(year, month, date).getMonth()),
            date: new Date(year, month, date).getDate(),
            indexDay: new Date(year, month, date).getDay(),
            day: serviceApi.getDayFromForcast(new Date(year, month, date))
        };
        const currentMonth = yield select(state => state.partner1State.startOfRest);

        if (
            new Date(currentMonth.year, currentMonth.indexMonth, currentMonth.date) >=
            new Date(endDateObj.year, endDateObj.indexMonth, endDateObj.date)) {
            yield put(startOfRestErrorSaga(true));
        } else {
            yield put(getEndOfRestSaga(endDateObj));
        }
    }
}

export function* watcherGetAllDaysOfRest() {
    while (true) {
        yield take("GET_ALL_DAYS_OF_REST_ACTION");
        const countDays = yield call(workerGetAllDaysOfRest);
        yield put(getAllDaysOfRestSaga(countDays));
        console.log('watcher getCalculation iteration complete!');
    }
}

function* workerGetAllDaysOfRest() {
    const startOfRest = yield select((state) => state.partner1State.startOfRest);
    const endOfRest = yield select((state) => state.partner1State.endOfRest);
    const allDays = [];
    let startDate = +JSON.parse(JSON.stringify(startOfRest.date));
    for (startDate; new Date(startOfRest.year, startOfRest.indexMonth, startDate) <
    new Date(endOfRest.year, endOfRest.indexMonth, endOfRest.date); startDate++) {
        allDays.push(startDate);
    }
    return allDays.length;
}

export function* watcherGetCostCalculation() {
    while (true) {
        console.log('start iteration saga');
        const { people, apartaments, menu, services } = yield take("GET_COST_CALCULATION_ACTION");
        yield call(workerGetCostCalculation, { people, apartaments, menu, services });
        console.log('watcherGetCostCalculation iteration complete!');
    }
}

function* workerGetCostCalculation({ people, apartaments, menu, services }) {
    const newCostCalculation = {
        people: people,
        apartaments: apartaments,
        menu: menu,
        services: services
    };
    let costOfApartaments;
    let costOfBreakfast;
    let costOfLunch;
    let costOfDinner;
    let costOfServices = 0;
    let priceForApartaments = yield select((state) => state.partner1State.priceForApartaments);
    let priceForMenu = yield select((state) => state.partner1State.priceForMenu);
    let priceForServices = yield select((state) => state.partner1State.priceForServices);
    let currentApartaments;
    let currentBreakfast;
    let currentLunch;
    let currentDinner;
    let currentServices;
    for (let key in priceForApartaments) {
        if (priceForApartaments[key].type === apartaments.type) {
            currentApartaments = priceForApartaments[key];
        }
    }
    for (let key in priceForMenu.breakfast) {
        if (priceForMenu.breakfast[key].type === menu.breakfast.type) {
            currentBreakfast = priceForMenu.breakfast[key];
        }
    }
    for (let key in priceForMenu.lunch) {
        if (priceForMenu.lunch[key].type === menu.lunch.type) {
            currentLunch = priceForMenu.lunch[key];
        }
    }
    for (let key in priceForMenu.dinner) {
        if (priceForMenu.dinner[key].type === menu.dinner.type) {
            currentDinner = priceForMenu.dinner[key];
        }
    }
    costOfApartaments = (currentApartaments.price.adult * people.adult.value) +
        (currentApartaments.price.children * people.children.value);

    costOfBreakfast = (currentBreakfast.price.adult * people.adult.value) +
        (currentBreakfast.price.children * people.children.value);

    costOfLunch = (currentLunch.price.adult * people.adult.value) +
        (currentLunch.price.children * people.children.value);

    costOfDinner = (currentDinner.price.adult * people.adult.value) +
        (currentDinner.price.children * people.children.value);

    let costOfServicesArr = services.map((service) => {
        let sum = 0;
        for (let key in priceForServices.tours) {
            if (priceForServices.tours[key].type === service.type) {
                sum += ((priceForServices.tours[key].price.adult * people.adult.value) +
                    (priceForServices.tours[key].price.children * people.children.value))
            }
        }
        console.log('sum services cash:', sum);
        return sum;
    });

    costOfServices = costOfServicesArr.reduce((a, b) => a + b, 0);

    console.log('sum costOfServices cash:', costOfServices);

    const allDays = yield select((state) => state.partner1State.allDays);

    let sumCash = ((costOfApartaments + costOfBreakfast + costOfLunch + costOfDinner ) * allDays)+ costOfServices;

    yield put(getCostCalculationSaga(newCostCalculation, sumCash));



    console.log('sumCash from saga: ', sumCash);
    console.log('currentLunch from saga: ', currentLunch);
}


export const partner1StateTestAction = () => {
    return {
        type: "PARTNER_1_STATE_TEST_ACTION"
    };
};

export const partner1StateTestSaga = () => {
    return {
        type: "PARTNER_1_STATE_TEST_SAGA"
    };
};

export const getCurrentMonthSaga = (monthArr) => {
    return {
        type: "GET_CURRENT_MONTH_SAGA",
        payload: monthArr
    };
};

export const getStartMonthSaga = (monthArr) => {
    return {
        type: "GET_START_MONTH_SAGA",
        payload: monthArr
    };
};

export const getEndMonthSaga = (monthArr) => {
    return {
        type: "GET_END_MONTH_SAGA",
        payload: monthArr
    };
};

export const getStartOfRestAction = (date) => {
    return {
        type: "GET_START_OF_REST_ACTION",
        payload: date
    };
};

export const getPrevStartMonthAction = () => {
    return {
        type: "GET_PREV_START_MONTH_ACTION"
    };
};

export const getPrevEndMonthAction = () => {
    return {
        type: "GET_PREV_END_MONTH_ACTION"
    };
};

export const getNextStartMonthAction = () => {
    return {
        type: "GET_NEXT_START_MONTH_ACTION"
    };
};

export const getNextEndMonthAction = () => {
    return {
        type: "GET_NEXT_END_MONTH_ACTION"
    };
};

export const getStartDateOfRestAction = (date) => {
    return {
        type: "GET_START_DATE_OF_REST_ACTION",
        payload: date
    };
};

export const getEndDateOfRestAction = (date) => {
    return {
        type: "GET_END_DATE_OF_REST_ACTION",
        payload: date
    };
};

export const getStartOfRestSaga = (dateObj) => {
    return {
        type: "GET_START_OF_REST_SAGA",
        payload: dateObj
    };
};

export const startOfRestErrorSaga = (bool) => {
    return {
        type: "START_OF_REST_ERROR_SAGA",
        payload: bool
    };
};

export const getEndOfRestSaga = (dateObj) => {
    return {
        type: "GET_END_OF_REST_SAGA",
        payload: dateObj
    };
};

export const getAllDaysOfRestAction = () => {
    return {
        type: "GET_ALL_DAYS_OF_REST_ACTION"
    };
};

export const getAllDaysOfRestSaga = (allDays) => {
    return {
        type: "GET_ALL_DAYS_OF_REST_SAGA",
        payload: allDays
    };
};

export const getCostCalculationAction = (people, apartaments, menu, services) => {
    return {
        type: "GET_COST_CALCULATION_ACTION",
        people: people,
        apartaments: apartaments,
        menu: menu,
        services: services
    };
};

export const getCostCalculationSaga = (costCalculation, cash) => {
    return {
        type: "GET_COST_CALCULATION_SAGA",
        costCalculation: costCalculation,
        cash: cash
    };
};


export const getNewLocation = (newCity) => {
    return {
        type: "GET_NEW_LOCATION",
        payload: newCity
    };
};

export const clearLocationSaga = () => {
    return {
        type: "CLEAR_LOCATION_SAGA"
    };
};

export const getNewLocationSaga = (newCity) => {
    return {
        type: "GET_NEW_LOCATION_SAGA",
        payload: newCity
    };
};

export const getNewWeatherToday = (city) => {
    return {
        type: "GET_NEW_WEATHER_TODAY",
        payload: city
    };
};

export const getNewWeatherTodaySaga = (weather) => {
    return {
        type: "GET_NEW_WEATHER_TODAY_SAGA",
        payload: weather
    };
};

export const getWeatherForcastAction = (weatherObj) => {
    return {
        type: "GET_WEATHER_FORCAST_ACTION",
        payload: weatherObj
    };
};

export const getWeatherForcastSaga = (forcastArr) => {
    return {
        type: "GET_WEATHER_FORCAST_SAGA",
        payload: forcastArr
    };
};

export const getWeatherDetails = () => {
    return {
        type: "GET_WEATHER_DETAILS"
    };
};

export const getWeatherDetailsSaga = (newDetails) => {
    return {
        type: "GET_WEATHER_DETAILS_SAGA",
        payload: newDetails
    };
};

export const getUpdateWeatherForcastAction = (weatherObj) => {
    return {
        type: "GET_UPDATE_WEATHER_FORCAST_ACTION",
        payload: weatherObj
    };
};

export const getSelectCountryAction = () => {
    return {
        type: "GET_SELECT_COUNTRY_ACTION"
    };
};

export const getSelectCountrySaga = (countries) => {
    return {
        type: "GET_SELECT_COUNTRY_SAGA",
        payload: countries
    };
};

export const getSelectStatesAction = (country) => {
    return {
        type: "GET_SELECT_STATES_ACTION",
        payload: country
    };
};

export const getSelectStateSaga = (state) => {
    return {
        type: "GET_SELECT_STATE_SAGA",
        payload: state
    };
};

export const getSelectCitiesAction = (state) => {
    return {
        type: "GET_SELECT_CITIES_ACTION",
        payload: state
    };
};

export const getSelectCitiesSaga = (cities) => {
    return {
        type: "GET_SELECT_CITIES_SAGA",
        payload: cities
    };
};
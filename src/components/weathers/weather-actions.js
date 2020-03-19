

export const getInputCity = (city) => {
    return {
        type: "GET_INPUT_CITY",
        payload: city
    };
};

export const getInputCitySaga = (city) => {
    return {
        type: "GET_INPUT_CITY_SAGA",
        payload: city
    };
};

export const getNewLocation = (newCity) => {
    return {
        type: "GET_NEW_LOCATION",
        payload: newCity
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
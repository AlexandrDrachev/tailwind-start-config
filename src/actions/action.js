

export const getLatitudeCity = (lat) => {
    return {
        type: "GET_LATITUDE_CITY",
        payload: lat
    };
};

export const getNewLatitudeCity = (lat) => {
    return {
        type: "GET_NEW_LATITUDE_CITY",
        payload: lat
    };
};

export const getLongitudeCity = (lng) => {
    return {
        type: "GET_LONGITUDE_CITY",
        payload: lng
    };
};

export const getNewLongitudeCity = (lng) => {
    return {
        type: "GET_NEW_LONGITUDE_CITY",
        payload: lng
    };
};

export const autorisationTest = () => {
    return {
        type: 'AUTORISATION_TEST'
    };
};

export const autorisationSaga = () => {
    return {
        type: 'SAGA_TAKE_AUTORISATION'
    };
};

export const getCurrentCity = (city) => {
    return {
        type: "GET_CURRENT_CITY",
        payload: city
    };
};

export const getCurrentCitySaga = (city) => {
    return {
        type: "GET_CURRENT_CITY_SAGA",
        payload: city
    };
};

export const clearFormCity = () => {
    return {
        type: "CLEAR_FORM_CITY"
    };
};


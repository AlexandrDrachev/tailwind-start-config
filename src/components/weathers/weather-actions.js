export const getLatitudeCity = (lat) => {
    return {
        type: "GET_LATITUDE_CITY",
        payload: lat
    };
};

export const getLongitudeCity = (lng) => {
    return {
        type: "GET_LONGITUDE_CITY",
        payload: lng
    };
};

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



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
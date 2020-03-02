export const initialLocationsState = {
    latitudeCity: "",
    longitudeCity: "",
    currentCity: "",
    inputCity: ""
};

export const locationReducer = (state, action) => {
    if (state === undefined) {
        return initialLocationsState;
    }
    console.log('action: ', action);
    switch (action.type) {
        case "GET_LATITUDE_CITY":
            return {
                ...state,
                latitudeCity: action.payload
            };

        case "GET_LONGITUDE_CITY":
            return {
                ...state,
                longitudeCity: action.payload
            };
        case 'GET_NEW_LATITUDE_CITY':
            return {
                ...state,
                latitudeCity: action.payload
            };
        case "GET_NEW_LONGITUDE_CITY":
            return {
                ...state,
                longitudeCity: action.payload
            };
        case "GET_CURRENT_CITY_SAGA":
            return {
                ...state,
                currentCity: action.payload
            };
        case "CLEAR_FORM_CITY":
            return {
                ...state,
                currentCity: ""
            };

        default:
            return state;
    }
};
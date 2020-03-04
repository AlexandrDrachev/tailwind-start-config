export const initialLocationsState = {
    latitudeCity: null,
    longitudeCity: null,
    inputCity: "",
    newLocation: null
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
        case "GET_INPUT_CITY_SAGA":
            return {
                ...state,
                inputCity: action.payload
            };
        case "CLEAR_FORM_CITY":
            return {
                ...state,
                inputCity: ""
            };
        case "GET_NEW_LOCATION_SAGA":
            return {
                ...state,
                newLocation: action.payload,
                latitudeCity: action.payload.latitude,
                longitudeCity: action.payload.longitudeCity
            };

        default:
            return state;
    }
};
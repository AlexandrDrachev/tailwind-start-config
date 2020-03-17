export const initialLocationsState = {
    latitudeCity: null,
    longitudeCity: null,
    inputCity: "",
    newLocation: null,
    weatherToday: null
};

export const locationReducer = (state, action) => {
    if (state === undefined) {
        return initialLocationsState;
    }
    console.log('action: ', action);
    switch (action.type) {
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
            };
        case "GET_NEW_WEATHER_TODAY_SAGA":
            return {
                ...state,
                weatherToday: action.payload
            };

        default:
            return state;
    }
};
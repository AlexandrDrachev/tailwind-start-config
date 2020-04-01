export const initialLocationsState = {
    selectCountry: null,
    selectState: null,
    selectCity: null,
    newLocation: null,
    weatherToday: null,
    weatherForcast: null,
    weatherDetails: {
        day: false,
        night: false,
        snow: false,
        rain: false,
        summer: false,
        autumn: false,
        winter: false,
        spring: false
    }
};

export const locationReducer = (state, action) => {
    if (state === undefined) {
        return initialLocationsState;
    }
    console.log('action: ', action);
    switch (action.type) {
        case "GET_NEW_LOCATION_SAGA":
            return {
                ...state,
                newLocation: action.payload,
            };
        case "CLEAR_LOCATION_SAGA":
            return {
                ...state,
                selectCountry: null,
                selectState: null,
                selectCity: null
            };
        case "GET_NEW_WEATHER_TODAY_SAGA":
            return {
                ...state,
                weatherToday: action.payload
            };
        case "GET_WEATHER_FORCAST_SAGA":
            return {
                ...state,
                weatherForcast: action.payload
            };
        case "GET_WEATHER_DETAILS_SAGA":
            return {
                ...state,
                weatherDetails: action.payload
            };
        case "GET_SELECT_COUNTRY_SAGA":
            return {
                ...state,
                selectCountry: action.payload
            };
        case "GET_SELECT_STATE_SAGA":
            return {
                ...state,
                selectState: action.payload
            };
        case "GET_SELECT_CITIES_SAGA":
            return {
                ...state,
                selectCity: action.payload
            };

        default:
            return state;
    }
};
export const initialLocationsState = {
    latitudeCity: "",
    longitudeCity: ""
};

export const locationReducer = (state, action) => {
    if (state === undefined) {
        return initialLocationsState;
    }
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
        default:
            return state;
    }
};
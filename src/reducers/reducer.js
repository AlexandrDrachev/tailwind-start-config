import { initialLocationsState } from "./locationsReducer";
import { initialAutorisationState } from "./autorisationReducer";
import { autorisationReducer } from "./autorisationReducer";
import { locationReducer } from "./locationsReducer";

const initialState = {
    locationsState: initialLocationsState,
    autorisationState: initialAutorisationState
};

const reducer = (state = initialState, action) => {
    const { locationsState, autorisationState } = state;
    return {
        locationsState: locationReducer(locationsState, action),
        autorisationState: autorisationReducer(autorisationState, action)
    };
};

export default reducer;
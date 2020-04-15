import { initialLocationsState } from "./locationsReducer";
import { initialAutorisationState } from "./autorisationReducer";
import { autorisationReducer } from "./autorisationReducer";
import { locationReducer } from "./locationsReducer";
import { partner1Reducer, initialPartner1State } from "../components/partners/partner1/partner1-reducer";

const initialState = {
    locationsState: initialLocationsState,
    autorisationState: initialAutorisationState,
    partner1State: initialPartner1State
};

const reducer = (state = initialState, action) => {
    const { locationsState, autorisationState, partner1State } = state;
    return {
        locationsState: locationReducer(locationsState, action),
        autorisationState: autorisationReducer(autorisationState, action),
        partner1State: partner1Reducer(partner1State, action)
    };
};

export default reducer;
import { initialLocationsState } from "./locationsReducer";
import { initialAutorisationState } from "./autorisationReducer";
import { autorisationReducer } from "./autorisationReducer";
import { locationReducer } from "./locationsReducer";
import { partner1Reducer, initialPartner1State } from "../components/partners/partner1/partner1-reducer";
import { partner3Reducer, initialPartner3State } from "../components/partners/partner3/partner3-reducer";

const initialState = {
    locationsState: initialLocationsState,
    autorisationState: initialAutorisationState,
    partner1State: initialPartner1State,
    partner3State: initialPartner3State
};

const reducer = (state = initialState, action) => {
    const { locationsState, autorisationState, partner1State, partner3State } = state;
    return {
        locationsState: locationReducer(locationsState, action),
        autorisationState: autorisationReducer(autorisationState, action),
        partner1State: partner1Reducer(partner1State, action),
        partner3State: partner3Reducer(partner3State, action)
    };
};

export default reducer;
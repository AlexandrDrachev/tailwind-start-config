export const initialAutorisationState = {
    autorisation: false,
    registration: false,
    userActive: null,
    users: [
        {id: 1, userName: 'Admin', pasword: 123456}
    ]
};

export const autorisationReducer = (state, action) => {
    if (state === undefined) {
        return initialAutorisationState;
    }

    switch (action.type) {
        case 'AUTORISATION_TEST':
            return {
                ...state,
                autorisation: !state.autorisation
            };

        default:
            return state;
    }
};
export const initialAutorisationState = {
    autorisation: false,
    registration: false,
    userActive: null,
    users: [
        { id: 1, userName: 'Admin', password: 123456 }
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
        case "SAVE_USER_ACTIVE":
            return {
                ...state,
                userActive: action.payload,
                autorisation: true,
                registration: false
            };
        case "USER_EXIT_SAGA":
            return {
                ...state,
                autorisation: false,
                registration: false,
                userActive: null
            };
        case "GET_REGISTRATION_SAGA":
            return {
                ...state,
                registration: true,
                autorisation: false
            };
        case "ADDED_NEW_USER_IN_STATE_SAGA":
            return {
                ...state,
                autorisation: true,
                registration: false,
                users: action.payload,
                userActive: action.userActive
            };
        case "AUTORISATION_QUEST_SAGA":
            return {
                ...state,
                autorisation: true,
                registration: false,
                userActive: {
                    userName: "Quest"
                }
            };

        default:
            return state;
    }
};
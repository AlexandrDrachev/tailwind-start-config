export const initialAutorisationState = {
    autorisation: false,
    registration: false,
    userActive: null,
    users: [
        { id: 1, userName: 'Admin', password: 123456, avatar: "" },
        { id: 2, userName: 'Mark', password: 123456, avatar: "https://randomuser.me/api/portraits/men/96.jpg" },
        { id: 3, userName: 'John', password: 123456, avatar: "https://randomuser.me/api/portraits/men/69.jpg" },
        { id: 4, userName: 'Camille', password: 123456, avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
        { id: 5, userName: 'Henrikke', password: 123456, avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
        { id: 6, userName: 'Milan', password: 123456, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 7, userName: 'Marc', password: 123456, avatar: "https://randomuser.me/api/portraits/men/97.jpg" },
        { id: 8, userName: 'Milla', password: 123456, avatar: "https://randomuser.me/api/portraits/women/70.jpg" },
        { id: 9, userName: 'Agustin', password: 123456, avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
        { id: 10, userName: 'Tobias', password: 123456, avatar: "https://randomuser.me/api/portraits/men/66.jpg" }
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
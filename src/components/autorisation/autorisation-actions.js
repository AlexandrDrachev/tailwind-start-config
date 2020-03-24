
export const getAutorisationAction = (loginObj) => {
    return {
        type: "GET_AUTORISATION_ACTION",
        payload: loginObj
    };
};

export const saveUserActive = (userActive) => {
    console.log('userActive payload: ', userActive);
    return {
        type: "SAVE_USER_ACTIVE",
        payload: userActive
    };
};

export const userExit = () => {
    console.log('exit');
    return {
        type: "USER_EXIT"
    };
};

export const userExitSaga = () => {
    console.log('exit');
    return {
        type: "USER_EXIT_SAGA"
    };
};

export const userExitGenerator = () => {
    return {
        type: "USER_EXIT_GENERATOR"
    };
};

export const getRegistration = () => {
    return {
        type: "GET_REGISTRATION_ACTION"
    };
};

export const getRegistrationSaga = () => {
    return {
        type: "GET_REGISTRATION_SAGA"
    };
};

export const addedNewUserInStateAction = (newUser) => {
    return {
        type: "ADDED_NEW_USER_IN_STATE_ACTION",
        payload: newUser
    };
};

export const addedNewUserInStateSaga = (newUsers, userActive) => {
    return {
        type: "ADDED_NEW_USER_IN_STATE_SAGA",
        payload: newUsers,
        userActive: userActive
    };
};

export const autorisationQuestAction = () => {
    return {
        type: "AUTORISATION_QUEST_ACTION"
    };
};

export const autorisationQuestSaga = () => {
    return {
        type: "AUTORISATION_QUEST_SAGA"
    };
};
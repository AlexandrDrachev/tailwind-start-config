

export const getPartner3StateTest = () => {
    return {
        type: "GET_PARTNER3_STATE_TEST"
    };
};

export const getNewMessageAction = (message) => {
    return {
        type: "GET_NEW_MESSAGE_ACTION",
        payload: message
    };
};

export const addedNewMessageInStateSaga = (message) => {
    return {
        type: "ADDED_NEW_MESSAGE_IN_STATE_SAGA",
        payload: message
    };
};

export const getActiveChatAction = (id) => {
    console.log('chatId: ', id);
    return {
        type: 'GET_ACTIVE_CHAT_ACTION',
        payload: id
    };
};

export const getActiveChatSaga = (chat) => {
    return {
        type: "GET_ACTIVE_CHAT_SAGA",
        payload: chat
    };
};
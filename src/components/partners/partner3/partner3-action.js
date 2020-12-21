

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

export const addedNewMessageInActiveChatSaga = (message) => {
    return {
        type: "ADDED_NEW_MESSAGE_IN_ACTIVE_CHAT_SAGA",
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

export const updateMessagesInChatsSaga = (indexChat, newMessages) => {
    return {
        type: "UPDATE_MESSAGES_IN_CHATS_SAGA",
        index: indexChat,
        payload: newMessages
    };
};
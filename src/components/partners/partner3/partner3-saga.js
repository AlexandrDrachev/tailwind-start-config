import { take, call, put, select } from 'redux-saga/effects';

import { addedNewMessageInActiveChatSaga, getActiveChatSaga, updateMessagesInChatsSaga } from './partner3-action';

export function* watcherGetNewMessage() {
    while (true) {
        console.log('saga start');
        const { payload } = yield take("GET_NEW_MESSAGE_ACTION");
        yield call(workerAddedNewMessageInState, payload);
        console.log('saga iteration complete!');
    }
}

function* workerAddedNewMessageInState(payload) {
    const messages = yield select((state => state.partner3State.activeChat.messages));
    yield put(addedNewMessageInActiveChatSaga([...messages, payload]));
    const activeChat = yield select((state) => state.partner3State.activeChat);
    const chats = yield select((state) => state.partner3State.chats);
    const indexActiveChat = chats.findIndex((chat) => chat.chatId === activeChat.chatId);
    yield put(updateMessagesInChatsSaga(indexActiveChat, activeChat));
    console.log(yield select((state) => state.partner3State.chats[indexActiveChat]));
}

export function* watcherGetActiveChat() {
    while (true) {
        const { payload } = yield take('GET_ACTIVE_CHAT_ACTION');
        yield call(workerGetActiveChat, payload);
    }
}

function* workerGetActiveChat(payload) {
    yield put(getActiveChatSaga(null));
    const chats = yield select((state) => state.partner3State.chats);
    const activeChat = chats.find((chat) => chat.chatId === payload);
    yield put(getActiveChatSaga(activeChat));
}
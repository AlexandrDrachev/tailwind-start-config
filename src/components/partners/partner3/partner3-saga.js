import { take, call, put, select } from 'redux-saga/effects';

import { addedNewMessageInStateSaga, getActiveChatSaga } from './partner3-action';

export function* watcherGetNewMessage() {
    while (true) {
        console.log('saga start');
        const { payload } = yield take("GET_NEW_MESSAGE_ACTION");
        yield call(workerAddedNewMessageInState, payload);
        console.log('saga iteration complete!');
    }
}

function* workerAddedNewMessageInState(payload) {
    const messages = yield select((state => state.partner3State.messages));
    yield put(addedNewMessageInStateSaga([...messages, payload]));
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
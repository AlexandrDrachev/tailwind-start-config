import { take, call, put, select, fork, cancel } from 'redux-saga/effects';

import {
    getRegistrationSaga, saveUserActive, userExitSaga, userExit, addedNewUserInStateSaga,
    autorisationQuestSaga
} from "./autorisation-actions";


export function* watchGetAutorisation() {
    while (true) {
        const loginObj = yield take("GET_AUTORISATION_ACTION");
        yield call(workerAutorisation, loginObj);
    }
}

function* workerAutorisation(loginObj) {
    let usersStore = JSON.parse(JSON.stringify(yield select(state => state.autorisationState)));
    const checkAutorisation = usersStore.users.some((user) => {
        return user.userName === loginObj.payload.userName;
    });
    if (checkAutorisation) {
        yield put(saveUserActive(loginObj.payload));
        yield take("USER_EXIT");
        yield put(userExitSaga());
    } else {
        alert("Autorisation Failed!");
        yield put(userExitSaga());
    }
}

export function* watchGetRegistration() {
    while (true) {
        yield take(["GET_REGISTRATION_ACTION"]);
        yield put(getRegistrationSaga());
    }
}

export function* watcherRegistrationNewUser() {

    while (true) {
        console.log('saga registration start!');
        yield put(userExitSaga());
        const { payload } = yield take(["ADDED_NEW_USER_IN_STATE_ACTION"]);
        const task = yield fork(workerRegistrationNewUser, payload);
        yield take(["USER_EXIT"]);
        yield cancel(task);
        yield put(userExitSaga());
        console.log('saga registration complete!');
    }
}

function* workerRegistrationNewUser(payload) {
    const { userNameReg, passwordReg, repeatPassword, avatar } = payload;
    const usersState = JSON.parse(JSON.stringify(yield select((state) => state.autorisationState.users)));
    if (userNameReg === "" || passwordReg === "" || repeatPassword === "") {
        alert("incorrect form input");
        return yield put(userExit());
    } else if (passwordReg !== repeatPassword) {
        alert("incorrect password entry");
        return yield put(userExit());
    }
    const checkUser = usersState.every((user) => {
        return user.userName.toString() !== userNameReg.toString() &&
            user.password.toString() !== passwordReg.toString()  &&
            passwordReg.toString() === repeatPassword.toString();
    });
    if (!checkUser) {
        yield call(userExit);
    } else if (checkUser) {
        let newUserObj = {};
        newUserObj.id = usersState.length + 1;
        newUserObj.userName = JSON.parse(JSON.stringify(userNameReg));
        newUserObj.password = JSON.parse(JSON.stringify(passwordReg));
        newUserObj.avatar = JSON.parse(JSON.stringify(avatar));
        usersState.push(newUserObj);
        yield put(addedNewUserInStateSaga(usersState, newUserObj))
    }
}

export function* watchAutorisationQuest() {
    while (true) {
        yield take("AUTORISATION_QUEST_ACTION");
        yield put(autorisationQuestSaga());
        yield take("USER_EXIT");
        yield put(userExitSaga());
    }
}


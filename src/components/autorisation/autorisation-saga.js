import { take, call, put, select, fork, cancel } from 'redux-saga/effects';

import {
    getRegistrationSaga, saveUserActive, userExitSaga, userExitGenerator, addedNewUserInStateSaga,
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
        yield fork(genWorkerRegistration);
        yield take(["USER_EXIT", "USER_EXIT_SAGA", "USER_EXIT_GENERATOR"]);
        yield put(userExitSaga());
    }
}

function* genWorkerRegistration() {

        const { payload } = yield take(["ADDED_NEW_USER_IN_STATE_ACTION"]);
        const task = yield fork(workerGetRegistration, payload);
        const action = yield take(["USER_EXIT_SAGA"]);
        if (action.type === "USER_EXIT_SAGA") {
            yield cancel(task)
        }
        yield cancel(task);
        yield put(userExitGenerator());

}

function* workerGetRegistration(payload) {
    const { userNameReg, passwordReg, repeatPassword } = payload;
    const usersState = JSON.parse(JSON.stringify(yield select((state) => state.autorisationState.users)));
    if (userNameReg === "" || passwordReg === "" || repeatPassword === "") {
        alert("incorrect form input");
        return yield put(userExitGenerator());
    }
    if (passwordReg !== repeatPassword) {
        alert("incorrect password entry");
        return yield put(userExitGenerator());
    }
    const checkUser = usersState.every((user) => {
        return user.userName.toString() !== userNameReg.toString() &&
            user.password.toString() !== passwordReg.toString()  &&
            passwordReg.toString() === repeatPassword.toString();
    });
    console.log('checkUser: ', checkUser);
    if (!checkUser) {
        return yield put(userExitGenerator());
    }
    if (checkUser) {
        let newUserObj = {};
        newUserObj.id = usersState.length + 1;
        newUserObj.userName = JSON.parse(JSON.stringify(userNameReg));
        newUserObj.password = JSON.parse(JSON.stringify(passwordReg));
        usersState.push(newUserObj);
        return yield put(addedNewUserInStateSaga(usersState, newUserObj))
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


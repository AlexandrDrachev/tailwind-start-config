import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import { rootSagas } from "./sagas/saga";
import reducer from "./reducers/reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;
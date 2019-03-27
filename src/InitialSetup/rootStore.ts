import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Map } from 'immutable';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = Map();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    // @ts-ignore
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;

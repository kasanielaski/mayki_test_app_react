import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = {};

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    routerMiddleware(history),
    sagaMiddleware
];

const composedEnhancers = compose(
    applyMiddleware(...middleware)
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
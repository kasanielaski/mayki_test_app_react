import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const middleware = [
    routerMiddleware(history)
];

const composedEnhancers = compose(
    applyMiddleware(...middleware)
)

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
)

export default store;
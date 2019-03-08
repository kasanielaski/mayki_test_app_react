import { createActions } from 'redux-actions';
import { GET_MOVIE_LIST, FETCH_MOVIE_LIST, SET_MOVIE_LIST_ERROR } from './ActionTypes';

const actions = createActions({
    [GET_MOVIE_LIST]: payload => payload,
    [FETCH_MOVIE_LIST]: () => {},
    [SET_MOVIE_LIST_ERROR]: payload => payload
});

export default actions;
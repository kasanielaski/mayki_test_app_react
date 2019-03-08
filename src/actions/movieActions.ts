import { createActions } from 'redux-actions';
import { GET_MOVIE, FETCH_MOVIE, SET_MOVIE_ERROR } from './ActionTypes';

const actions = createActions({
    [GET_MOVIE]: payload => payload,
    [FETCH_MOVIE]: () => {},
    [SET_MOVIE_ERROR]: payload => payload
});

export default actions;
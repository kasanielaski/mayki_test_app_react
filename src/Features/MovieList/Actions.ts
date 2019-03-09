import { createActions } from 'redux-actions';
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH, MOVIE_LIST__FAIL } from './ActionTypes';

const actions = createActions({
    [MOVIE_LIST__GET]: payload => payload,
    [MOVIE_LIST__FETCH]: () => {},
    [MOVIE_LIST__FAIL]: payload => payload
});

export default actions;
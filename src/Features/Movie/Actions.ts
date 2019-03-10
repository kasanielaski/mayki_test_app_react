import { createActions } from 'redux-actions';
import { MOVIE__GET, MOVIE__FETCH, MOVIE_FAIL } from './ActionTypes';

const movieActions = createActions({
    [MOVIE__GET]: payload => payload,
    [MOVIE__FETCH]: () => {},
    [MOVIE_FAIL]: payload => payload
});

export default movieActions;

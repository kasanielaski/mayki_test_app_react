import { createActions } from 'redux-actions';
import { MOVIE__GET, MOVIE__FETCH } from './ActionTypes';

const movieActions = createActions({
    [MOVIE__GET]: payload => payload,
    [MOVIE__FETCH]: () => {}
});

export default movieActions;

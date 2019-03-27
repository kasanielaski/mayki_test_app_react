import { createActions } from 'redux-actions';
// @ts-ignore
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH } from './ActionTypes';

const movieListActions = createActions({
    // @ts-ignore
    [MOVIE_LIST__GET]: payload => payload,
    [MOVIE_LIST__FETCH]: () => {}
});

export default movieListActions;

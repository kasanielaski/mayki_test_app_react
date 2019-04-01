import { createActions } from 'redux-actions';
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH } from './ActionTypes';

const movieListActions = createActions({
    [MOVIE_LIST__GET]: (payload: string) => payload,
    [MOVIE_LIST__FETCH]: () => {}
});

export default movieListActions;

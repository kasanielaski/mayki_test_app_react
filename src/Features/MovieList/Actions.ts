import { createActions } from 'redux-actions';
// @ts-ignore
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH } from './ActionTypes';
import { IMovie } from '../../interfaces';

const movieListActions = createActions({
    [MOVIE_LIST__GET]: (payload: string) => payload,
    [MOVIE_LIST__FETCH]: (payload: IMovie[]) => payload
});

export default movieListActions;

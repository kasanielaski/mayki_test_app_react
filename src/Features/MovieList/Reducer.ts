import { handleActions } from 'redux-actions';
import { MOVIE_LIST__FETCH } from './ActionTypes';
import movieListState from './Store';

const movieListReducer = handleActions(
    {
        [MOVIE_LIST__FETCH]: (state, { payload }) =>
            // @ts-ignore
            state.set('movieList', payload)
    },
    movieListState
);

export default movieListReducer;

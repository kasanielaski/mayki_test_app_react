import { handleActions } from 'redux-actions';
import { MOVIE_LIST__FETCH } from './ActionTypes';
import movieListState from './movieListStore';

const movieListReducer = handleActions(
    {
        [MOVIE_LIST__FETCH]: (state, { payload }) =>
            // @ts-ignore
            state.set('movieList', payload.data)
    },
    movieListState
)

export default movieListReducer;
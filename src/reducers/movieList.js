import { handleActions } from 'redux-actions';
import { FETCH_MOVIE_LIST } from '../actions/ActionTypes';
import movieListState from './movieListStore';

const movieListReducer = handleActions(
    {
        [FETCH_MOVIE_LIST]: (state, { payload }) =>
            // @ts-ignore
            state.set('movieList', payload.data)
    },
    movieListState
)

export default movieListReducer;
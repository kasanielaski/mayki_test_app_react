import { handleActions } from 'redux-actions';
import { MOVIE__FETCH } from './ActionTypes';
import movieState from './movieStore';

const movieReducer = handleActions(
    {
        [MOVIE__FETCH]: (state, { payload }) =>
            // @ts-ignore
            state.set('movieList', payload.data)
    },
    movieState
)

export default movieReducer;
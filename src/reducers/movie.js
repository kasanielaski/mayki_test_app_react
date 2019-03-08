import { handleActions } from 'redux-actions';
import { FETCH_MOVIE } from '../actions/ActionTypes';
import movieState from './movieStore';

const movieReducer = handleActions(
    {
        [FETCH_MOVIE]: (state, { payload }) =>
            // @ts-ignore
            state.set('movieList', payload.data)
    },
    movieState
)

export default movieReducer;
import { handleActions } from 'redux-actions';
import { MOVIE__FETCH } from './ActionTypes';
import movieState from './Store';

const movieReducer = handleActions(
    {
        [MOVIE__FETCH]: (state, { payload }) => state.set('movie', payload)
    },
    movieState
);

export default movieReducer;

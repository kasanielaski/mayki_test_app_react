import { handleActions } from 'redux-actions';

import { MOVIE_LIST__FETCH } from './ActionTypes';
import movieListState from './Store';
import { IMovie } from '../../interfaces';

const movieListReducer = handleActions(
    {
        [MOVIE_LIST__FETCH]: (state, { payload }: { payload: IMovie[] }) =>
            // @ts-ignore
            state.set('movieList', payload)
    },
    movieListState
);

export default movieListReducer;

import { createSelector } from 'reselect';
import { Map } from 'immutable';

import { IMovieDetail } from '../../interfaces';

const domain = ['movieReducer'];

const movieFullSelector = (state: Map<string, {}>) =>
    state.getIn([...domain, 'movie']);

const movieSelector = createSelector(
    movieFullSelector,
    (movie: IMovieDetail) => ({ movie })
);

export const movieStore = (state: Map<string, IMovieDetail>) =>
    movieSelector(state);

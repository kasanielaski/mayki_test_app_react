import { createSelector } from 'reselect';

const domain = ['movie'];

const movieFullSelector = (state: any) => state.getIn([...domain, 'movie']);

const movieSelector = createSelector(
    movieFullSelector,
    movieList => ({ movieList })
);

export const movieStore = (state: any) => movieSelector(state);

import { createSelector } from 'reselect';

const domain = ['movieReducer'];

const movieFullSelector = state => state.getIn([...domain, 'movie']);

const movieSelector = createSelector(
    movieFullSelector,
    movie => ({ movie })
);

export const movieStore = state => movieSelector(state);

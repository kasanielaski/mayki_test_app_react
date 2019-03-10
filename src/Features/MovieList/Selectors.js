import { createSelector } from 'reselect';

const domain = ['movieListReducer'];

const listSelector = state => state.getIn([...domain, 'movieList']);

const movieListSelector = createSelector(
    listSelector,
    movieList => ({ movieList })
);

export const movieListStore = state => movieListSelector(state);

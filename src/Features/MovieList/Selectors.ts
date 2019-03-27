import { createSelector } from 'reselect';

const domain = ['movieListReducer'];

// @ts-ignore
const listSelector = state => state.getIn([...domain, 'movieList']);

const movieListSelector = createSelector(
    listSelector,
    movieList => ({ movieList })
);

// @ts-ignore
export const movieListStore = state => movieListSelector(state);

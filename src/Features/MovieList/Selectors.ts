import { createSelector } from 'reselect';
import { IMovie } from '../../interfaces';
import { Map } from 'immutable';

const domain = ['movieListReducer'];

const listSelector = (state: Map<string, {}>) =>
    state.getIn([...domain, 'movieList']);

const movieListSelector = createSelector(
    listSelector,
    (movieList: IMovie[]) => ({ movieList })
);

export const movieListStore = (state: Map<string, IMovie[]>) =>
    movieListSelector(state);

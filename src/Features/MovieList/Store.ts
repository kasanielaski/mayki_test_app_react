import { Map } from 'immutable';

import { IMovie } from '../../interfaces';

const movieListState: Map<string, IMovie[]> = Map({
    movieList: []
});

export default movieListState;

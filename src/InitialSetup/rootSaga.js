import { all, call } from 'redux-saga/effects';

import movieSaga from '../Features/Movie/movieSaga';
import movieListSaga from '../Features/MovieList/movieListSaga';

export default function* rootSaga() {
    yield all([
        call(movieSaga),
        call(movieListSaga)
    ]);
}
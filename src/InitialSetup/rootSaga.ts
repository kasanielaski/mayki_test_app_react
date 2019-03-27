import { all, call } from 'redux-saga/effects';

import { movieSaga } from '../Features/Movie';
import { movieListSaga } from '../Features/MovieList';

export default function* rootSaga() {
    yield all([call(movieSaga), call(movieListSaga)]);
}

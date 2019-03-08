import { all, call } from 'redux-saga/effects';

import movieSaga from './movieSaga';
import movieListSaga from './movieListSaga';

export default function* rootSaga() {
    yield all([
        call(movieSaga),
        call(movieListSaga)
    ]);
}
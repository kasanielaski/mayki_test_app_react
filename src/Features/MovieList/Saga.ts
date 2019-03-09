import { put, takeLatest } from 'redux-saga/effects';
import {
    MOVIE_LIST__GET,
    MOVIE_LIST__FETCH,
    MOVIE_LIST__FAIL
} from './ActionTypes';

function* fetchMovieList() {
    try {
        yield put({ type: MOVIE_LIST__FETCH, payload: 'ssssss' });
    } catch (error) {
        yield put({ type: MOVIE_LIST__FAIL, payload: error.message });
    }
}

export default function* movieListSaga() {
    yield takeLatest(MOVIE_LIST__GET, fetchMovieList);
}

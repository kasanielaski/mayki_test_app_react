import { put, takeLatest } from 'redux-saga/effects';
import { MOVIE__GET, MOVIE__FETCH, MOVIE_FAIL } from './ActionTypes';

function* fetchMovie() {
    try{
        yield put({ type: MOVIE__FETCH, payload: "ssssss" });
    } catch(error) {
        yield put({ type: MOVIE_FAIL, payload: error.message });
    }
};

export default function* movieSata() {
    yield takeLatest(MOVIE__GET, fetchMovie);
}
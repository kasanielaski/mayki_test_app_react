import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_MOVIE } from '../actions/ActionTypes';

function* fetchMovie() {
    yield put({ type: FETCH_MOVIE, payload: "ssssss" })
};

export default function* movieSata() {
    yield takeLatest(FETCH_MOVIE, fetchMovie);
}
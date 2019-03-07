import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_MOVIE_LIST } from '../actions/ActionTypes';

function* fetchMovieList() {
    yield put({ type: FETCH_MOVIE_LIST, payload: "ssssss" })
};

export default function* movieListSata() {
    yield takeLatest(FETCH_MOVIE_LIST, fetchMovieList);
}
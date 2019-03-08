import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_MOVIE_LIST, SET_MOVIE_LIST_ERROR, GET_MOVIE_LIST } from '../actions/ActionTypes';

function* fetchMovieList() {
    try {
        yield put({ type: FETCH_MOVIE_LIST, payload: "ssssss" });
    } catch(error) {
        yield put({ type: SET_MOVIE_LIST_ERROR, payload: error.message });
    }
};

export default function* movieListSata() {
    yield takeLatest(GET_MOVIE_LIST, fetchMovieList);
}
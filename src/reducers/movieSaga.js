import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_MOVIE, GET_MOVIE, SET_MOVIE_ERROR } from '../actions/ActionTypes';

function* fetchMovie() {
    try{
        yield put({ type: FETCH_MOVIE, payload: "ssssss" });
    } catch(error) {
        yield put({ type: SET_MOVIE_ERROR, payload: error.message });
    }
};

export default function* movieSata() {
    yield takeLatest(GET_MOVIE, fetchMovie);
}
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    MOVIE_LIST__GET,
    MOVIE_LIST__FETCH,
    MOVIE_LIST__FAIL
} from './ActionTypes';
import { apiKey } from '../../config';

function* fetchMovieList(payload: any) {
    try {
        const { Search } = yield call(() =>
            fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&s=${payload}/`
            ).then(r => r.json())
        );
        // yield put({ type: MOVIE_LIST__FETCH, payload: response });
    } catch (error) {
        // yield put({ type: MOVIE_LIST__FAIL, payload: error.message });
        console.log(error.message);
    }
}

export default function* movieListSaga() {
    yield takeLatest(MOVIE_LIST__GET, fetchMovieList);
}

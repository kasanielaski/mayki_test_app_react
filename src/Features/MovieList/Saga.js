import { call, put, takeLatest } from 'redux-saga/effects';
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH } from './ActionTypes';

import { apiKey } from '../../config';

function* fetchMovieList({ payload }) {
    try {
        const { Search, Error } = yield call(() =>
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${payload}`).then(
                r => r.json()
            )
        );
        if (Error) {
            console.log(Error);
        } else {
            yield put({ type: MOVIE_LIST__FETCH, payload: Search });
        }
    } catch (error) {
        // yield put({ type: MOVIE_LIST__FAIL, payload: error.message });
        throw Error(`there is some error: ${error}`);
    }
}

export default function* movieListSaga() {
    yield takeLatest(MOVIE_LIST__GET, fetchMovieList);
}

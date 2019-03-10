import { call, put, takeLatest } from 'redux-saga/effects';
import { MOVIE__GET, MOVIE__FETCH, MOVIE_FAIL } from './ActionTypes';

import { apiKey } from '../../config';

function* fetchMovie({ payload }: any) {
    try {
        const response = yield call(() =>
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${payload}`).then(
                r => r.json()
            )
        );
        yield put({ type: MOVIE__FETCH, payload: response });
    } catch (error) {
        // yield put({ type: MOVIE_FAIL, payload: error.message });
        throw Error(`there is some error: ${error}`);
    }
}

export default function* movieSata() {
    yield takeLatest(MOVIE__GET, fetchMovie);
}

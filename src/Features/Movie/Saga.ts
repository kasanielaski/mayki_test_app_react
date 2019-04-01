import { call, put, takeLatest } from 'redux-saga/effects';
import { MOVIE__GET, MOVIE__FETCH } from './ActionTypes';

import { apiKey } from '../../config';

function* fetchMovie({ payload }: { payload: string }) {
    try {
        const response = yield call(() =>
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${payload}`).then(
                r => r.json()
            )
        );
        yield put({ type: MOVIE__FETCH, payload: response });
    } catch (error) {
        throw Error(`there is some error: ${error}`);
    }
}

export default function* movieSaga() {
    // @ts-ignore
    yield takeLatest(MOVIE__GET, fetchMovie);
}

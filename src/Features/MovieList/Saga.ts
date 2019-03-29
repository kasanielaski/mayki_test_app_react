import { call, put, takeLatest } from 'redux-saga/effects';
import { MOVIE_LIST__GET, MOVIE_LIST__FETCH } from './ActionTypes';

import { IApiResponse } from '../../interfaces';
import { apiKey } from '../../config';

function* fetchMovieList({ payload }: { payload: string }) {
    try {
        const response: IApiResponse = yield call(() =>
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${payload}`).then(
                r => r.json()
            )
        );

        if (response.Error) {
            throw Error(`there is some error: ${response.Error}`);
        } else {
            yield put({ type: MOVIE_LIST__FETCH, payload: response.Search });
        }
    } catch (error) {
        throw Error(`there is some error: ${error}`);
    }
}

export default function* movieListSaga() {
    // @ts-ignore
    yield takeLatest(MOVIE_LIST__GET, fetchMovieList);
}

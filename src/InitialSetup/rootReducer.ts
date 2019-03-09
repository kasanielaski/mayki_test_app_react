import { combineReducers } from 'redux-immutable';
import movie from '../Features/Movie/movie';
import { movieListReducer } from '../Features/MovieList';

export default combineReducers({
    // @ts-ignore
    movie,
    // @ts-ignore
    movieListReducer
});

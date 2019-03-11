import { combineReducers } from 'redux-immutable';
import { movieReducer } from '../Features/Movie';
import { movieListReducer } from '../Features/MovieList';

export default combineReducers({
    movieReducer,
    movieListReducer
});

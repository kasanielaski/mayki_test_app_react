import { combineReducers } from 'redux';
import movie from './movie';
import movieList from './movieList';

export default combineReducers({
    movie,
    movieList
});
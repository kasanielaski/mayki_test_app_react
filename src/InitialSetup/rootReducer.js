import { combineReducers } from 'redux';
import movie from '../Features/Movie/movie';
import movieList from '../Features/MovieList/movieList';

export default combineReducers({
    movie,
    movieList
});
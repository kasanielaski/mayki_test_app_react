import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { movieStore } from './Selectors';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
`;

const MoviePage = ({
    movie: {
        Actors,
        Awards,
        Country,
        Director,
        Genre,
        Language,
        Metascore,
        Plot,
        Poster,
        Rated,
        Released,
        Runtime,
        Title,
        Writer,
        imdbRating
    }
}) => {
    return (
        <Wrapper>
            <Link to="/" replace>
                back to main
            </Link>
            <img src={Poster} alt="movie poster" />
            <span>Title: {Title}</span>
            <span>Actors: {Actors}</span>
            <span>Director: {Director}</span>
            <span>Country: {Country}</span>
            <span>Genre: {Genre}</span>
            <span>Plot: {Plot}</span>
            <span>imdbRating: {imdbRating}</span>
        </Wrapper>
    );
};

export default connect(
    movieStore,
    null
)(MoviePage);

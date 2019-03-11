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

const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    border-bottom: 1px solid #ccc;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:hover {
        color: #888;
    }
`;

const MoviePoster = styled.img`
    object-fit: cover;
    margin: 8px;
`;

const DetailItem = styled.li`
    border-top: 1px solid #ccc;
    padding: 8px;
`;

const Caption = styled.span`
    font-weight: bold;
    font-size: 1.2em;
`;

const MoviePage = ({
    movie: {
        Actors,
        Awards,
        Country,
        Director,
        Genre,
        Plot,
        Poster,
        Title,
        Writer,
        imdbRating,
        Year
    }
}) => {
    return (
        <Wrapper>
            <NavWrapper>
                <NavLink to="/" replace>
                    back to main
                </NavLink>
            </NavWrapper>

            <MoviePoster src={Poster} alt="movie poster" />

            <ul>
                <DetailItem>
                    <Caption>Title: </Caption>
                    {Title}
                </DetailItem>
                <DetailItem>
                    <Caption>Actors: </Caption>
                    {Actors}
                </DetailItem>
                <DetailItem>
                    <Caption>Director: </Caption>
                    {Director}
                </DetailItem>
                <DetailItem>
                    <Caption>Writer: </Caption>
                    {Writer}
                </DetailItem>
                <DetailItem>
                    <Caption>Country: </Caption>
                    {Country}
                </DetailItem>
                <DetailItem>
                    <Caption>Genre: </Caption>
                    {Genre}
                </DetailItem>
                <DetailItem>
                    <Caption>Plot: </Caption>
                    {Plot}
                </DetailItem>
                <DetailItem>
                    <Caption>Awards: </Caption>
                    {Awards}
                </DetailItem>
                <DetailItem>
                    <Caption>Year: </Caption>
                    {Year}
                </DetailItem>
                <DetailItem>
                    <Caption>imdbRating: </Caption>
                    {imdbRating}
                </DetailItem>
            </ul>
        </Wrapper>
    );
};

export default connect(
    movieStore,
    null
)(MoviePage);

import React from 'react';
import styled from 'styled-components';

import { IMovieShort } from '../../../intefaces';

const MovieElement = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    &:last-of-type {
        border-bottom: none;
    }

    &:hover {
        background-color: #eee;
    }
`;

const MovieList = ({
    data,
    getMovie
}: {
    data: IMovieShort;
    getMovie(payload: string): void;
}) => {
    return (
        <MovieElement onClick={() => getMovie(data.imdbID)}>
            <span>{data.Title}</span>
            <span>{data.Year}</span>
        </MovieElement>
    );
};

export default MovieList;

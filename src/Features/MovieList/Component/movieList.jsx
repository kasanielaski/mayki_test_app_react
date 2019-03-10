import React from 'react';
import styled from 'styled-components';

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

const MovieList = ({ data, getMovie }) => {
    return (
        <MovieElement onClick={() => getMovie(data.imdbID)}>
            <span>{data.Title}</span>
            <span>{data.Year}</span>
        </MovieElement>
    );
};

export default MovieList;

import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import movieListActions from './Actions';
import { movieListStore } from './Selectors';

import movieActions from '../Movie/Actions';

import { MovieList } from './Component';

const Wrapper = styled.main`
    margin: 0 auto;
    width: 50vw;
`;

const UserInput = styled.input`
    width: 75%;
    height: 36px;
    padding: 0 8px;
    border: 1px solid #ccc;
    border-right-width: 0;
    box-sizing: border-box;
`;

const SeacrhButton = styled.button`
    width: 25%;
    height: 36px;
    border: 1px solid #ccc;
    background-color: #eee;
`;

const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-top-width: 0;
`;

// @ts-ignore
const listActions = movieListActions.features.movieList;
// @ts-ignore
const movies = movieActions.features.movie;

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ ...listActions, ...movies }, dispatch);

const MovieListPage = (props: any) => {
    const [userInput, setInput] = useState('');

    const getMovie = (payload: string) => {
        props.movieGet(payload);
    };

    const list = props.movieList.map((item: any, index: number) => (
        <MovieList
            key={`${item.Title}_${index}`}
            data={item}
            getMovie={getMovie}
        />
    ));

    return (
        <Wrapper>
            <UserInput
                placeholder="type text to search"
                value={userInput}
                onChange={e => setInput(e.target.value)}
            />

            <SeacrhButton onClick={() => props.movieListGet(userInput)}>
                Search
            </SeacrhButton>

            {props.movieList.length > 0 && <ListWrapper>{list}</ListWrapper>}
        </Wrapper>
    );
};

export default connect(
    movieListStore,
    mapDispatchToProps
)(MovieListPage);

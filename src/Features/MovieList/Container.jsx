import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import movieListActions from './Actions';
import { movieListStore } from './Selectors';
import movieActions from '../Movie/Actions';

import { MovieList } from './Component';

const Wrapper = styled.main``;

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

const listActions = movieListActions.features.movieList;
const movies = movieActions.features.movie;

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...listActions, ...movies }, dispatch);

const MovieListPage = props => {
    const [userInput, setInput] = useState('');

    const getMovie = payload => {
        props.movieGet(payload);
        props.history.push('/details');
    };

    const list = props.movieList.map((item, index) => (
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

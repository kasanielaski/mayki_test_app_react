import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import actions from './Actions';
import { movieListStore } from './Selectors';

const Wrapper = styled.main`
    margin: 0 auto;
    width: 50vw;
    height: 36px;
`;

const UserInput = styled.input`
    width: 75%;
    height: 100%;
    padding: 0 8px;
    border: 1px solid #ccc;
    border-right-width: 0;
    box-sizing: border-box;
`;

const SeacrhButton = styled.button`
    width: 25%;
    height: 100%;
    border: 1px solid #ccc;
    background-color: #eee;
`;

// @ts-ignore
const movieListActions = actions.features.movieList;

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(movieListActions, dispatch);

const MovieList = (props: any) => {
    const [userInput, setInput] = useState('');

    useEffect(() => {
        props.movieListGet();
    });

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
        </Wrapper>
    );
};

export default connect(
    movieListStore,
    mapDispatchToProps
)(MovieList);

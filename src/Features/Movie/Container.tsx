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

const MoviePage = (props: any) => {
    return (
        <Wrapper>
            <Link to="/" replace>
                back to main
            </Link>
            movie details
        </Wrapper>
    );
};

export default connect(
    movieStore,
    null
)(MoviePage);

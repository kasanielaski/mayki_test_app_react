import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { MovieListPage, MoviePage } from '../Features';

const Wrapper = styled.div`
    padding-top: 50px;
    margin: 0 auto;
    width: 35vw;
`;

const Router = props => (
    <Wrapper>
        <Switch>
            <Route exact path="/" component={MovieListPage} {...props} />
            <Route path="/details" component={MoviePage} {...props} />
        </Switch>
    </Wrapper>
);

export default withRouter(connect()(Router));

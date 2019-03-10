import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { MovieListPage } from '../Features';

const Wrapper = styled.div`
    padding-top: 50px;
`;

const Router = (props: any) => (
    <Wrapper>
        <Switch>
            <Route exact path="/" component={MovieListPage} {...props} />
        </Switch>
    </Wrapper>
);

export default connect()(withRouter(Router));

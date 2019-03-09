import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { MovieList } from '../Features';

const Router = (props: any) => (
    <Switch>
        <Route exact path="/" component={MovieList} {...props} />
    </Switch>
);

export default connect()(withRouter(Router));

import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import {  } from "../Features";

const Router = props => (
    <Switch>
        <Route exact path="/" component={GreetingPage} {...props} />
    </Switch>
);

export default connect()(withRouter(Router));

import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes;
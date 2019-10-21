import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ... rest}) => (
    <Route {... rest} render={props => (
        isAuthenticated()? (
            <Component { ... props}/>
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
        )
        )}/>
)

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                {/* <PrivateRoute path="/DashPlanner" component={DashboardPlanner}/> */}
            </Switch>
        </BrowserRouter>
    );
}


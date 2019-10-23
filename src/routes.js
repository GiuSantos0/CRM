import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import Login from './pages/Login';
import DashboardPlanner from './pages/Planejadores/DashboardPlanner';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
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
                <PrivateRoute path="/DashPlanner" component={DashboardPlanner}/>
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}


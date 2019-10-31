import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import Login from './pages/Login';

// Planejadores
import DashboardPlanner from './pages/Planejadores/DashboardPlanner';
import Crm from './pages/Planejadores/Crm';


// Vê se esta autenticado
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
                <PrivateRoute path="/Clientes" component={Crm}/>
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}


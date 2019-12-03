import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import Login from './pages/Login';

// Planejadores
import DashboardFinanceiroPlanner from './pages/Planejadores/DashboardFinanceiro';
import DashboardPlanejamentoPlanner from './pages/Planejadores/DashboardPlanejamento';
import Crm from './pages/Planejadores/Crm';
import Tasks from './pages/Planejadores/Tasks';
import LoadImage from '../src/assets/menina-load.png';


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
                <PrivateRoute path="/DashFinanceiro" component={DashboardFinanceiroPlanner}/>
                <PrivateRoute path="/DashPlanner" component={DashboardPlanejamentoPlanner}/>
                <PrivateRoute path="/Clientes" component={Crm}/>
                <PrivateRoute path="/Tasks" component={Tasks}/>
                <Route path="/LoadingImage" component={LoadImage}/>
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}


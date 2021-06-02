import React, { Component } from 'react';
import Landingpage from './landingpage';
import About from './about';
import Contactus from './contactus';
import Ourwork from './ourwork';
import { Router , Switch, Route } from 'react-router-dom';
import history from './history';

export default class Main extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact={true} component={Landingpage} />
                    <Route path="/About" component={About} />
                    <Route path="/Contactus" component={Contactus} />
                    <Route path="/Ourwork" component={Ourwork} />
                </Switch>
            </Router>
        )
    }
}
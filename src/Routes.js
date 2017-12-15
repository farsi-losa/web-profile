import React, { Component } from 'react';
import Cv from './app/cv/Cv';
import IndexPlayground from './app/playground/IndexPlayground';
import { Route, Switch } from 'react-router';

/* Use components to define routes */
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Cv}/>

                <Route path="/playground" component={IndexPlayground}/>
                {/* <Redirect from="/accounts" to="/users"/> */}

                {/* <Route component={NoMatch}/> */}
            </Switch>
        )
    }
}
export default Routes;
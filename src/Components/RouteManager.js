import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Screens from '../Pages/index.js';

export class RouteManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/" render={() => { return <Redirect to="/home" /> }} />
                    <Route path="/home" render={(routeProps) => (<Screens.Home {...routeProps} />)} />
                    <Route path="/blog/" render={(routeProps) => (<Screens.Blog {...routeProps} />)} />
                    <Route path="/projects/" render={(routeProps) => (<Screens.Projects {...routeProps} />)} />
                    <Route path="/opencvrockpaperscissors/" render={(routeProps) => (<Screens.RPS {...routeProps} />)} />
                    <Route path="/about/" render={(routeProps) => (<Screens.About {...routeProps} />)} />
                    <Route path="/appraisalemobileapp/" render={(routeProps) => (<Screens.Appraisale {...routeProps} />)} />
                    <Route path="/cudpprogramming/" render={(routeProps) => (<Screens.CUDP {...routeProps} />)} />
                    <Route path="/discordbot/" render={(routeProps) => (<Screens.DiscordBot {...routeProps} />)} />
                    <Route path="/webglwork/" render={(routeProps) => (<Screens.WebGL {...routeProps} />)} />
                </Switch>
            </HashRouter>
        );
    }
}

export default RouteManager;
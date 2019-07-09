import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Screens from '../Pages/index.js';

export class RouteManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/website" render={(routeProps) => (<Screens.Home {...routeProps} />)} />
                    <Route exact path="/blog" render={(routeProps) => (<Screens.Blog {...routeProps} />)} />
                    <Route exact path="/projects/" render={(routeProps) => (<Screens.Projects {...routeProps} />)} />
                    <Route exact path="/opencvrockpaperscissors/" render={(routeProps) => (<Screens.RPS {...routeProps} />)} />
                    <Route exact path="/about/" render={(routeProps) => (<Screens.About {...routeProps} />)} />
                    <Route exact path="/appraisalemobileapp/" render={(routeProps) => (<Screens.Appraisale {...routeProps} />)} />
                    <Route exact path="/cudpprogramming/" render={(routeProps) => (<Screens.CUDP {...routeProps} />)} />
                    <Route exact path="/discordbot/" render={(routeProps) => (<Screens.DiscordBot {...routeProps} />)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouteManager;
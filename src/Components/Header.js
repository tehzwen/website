import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from '../Pages/Projects';
import Home from '../Pages/Home';
import RPS from '../Pages/OpenCVRPS';
import About from '../Pages/About';
import Appraisale from '../Pages/Appraisale';
import CUDP from '../Pages/CUDP';
import DiscordBot from '../Pages/DiscordBot';
import { Container, Row } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Container fluid className="Siteheader">
                        <Row>
                            <Link className="Headerlink" to="/website/" >Home</Link>
                            <Link className="Headerlink" to="/projects/">Projects</Link>
                            <Link className="Headerlink" to="/blog/">Blog</Link>
                            <Link className="Headerlink" to="/about/">About</Link>
                        </Row>

                    </Container>

                    <Route path="/website/" component={Home} />
                    <Route path="/projects/" component={Projects} />
                    <Route path="/opencvrockpaperscissors/" component={RPS} />
                    <Route path="/about/" component={About} />
                    <Route path="/appraisalemobileapp/" component={Appraisale} />
                    <Route path="/cudpprogramming/" component={CUDP} />
                    <Route path="/discordbot/" component={DiscordBot} />

                </div>
            </Router>
        )
    }
}

export default Header;
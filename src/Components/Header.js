import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from '../Pages/Projects';
import Home from '../Pages/Home';

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="Siteheader">
                        <Link className="Headerlink" to="/website/" >Home</Link>
                        <Link className="Headerlink" to="/website/projects/">Projects</Link>
                        <Link className="Headerlink" to="/website/blog/">Blog</Link>
                        <Link className="Headerlink" to="/website/about/">About</Link>
                    </header>

                    <Route path="/website/" component={Home} />
                    <Route path="/website/projects/" component={Projects} />
                    
                </div>
            </Router>
        )
    }
}

export default Header;
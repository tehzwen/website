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
                        <Link className="Headerlink" to="/home/" >Home</Link>
                        <Link className="Headerlink" to="/projects/">Projects</Link>
                        <Link className="Headerlink" to="/blog/">Blog</Link>
                        <Link className="Headerlink" to="/about/">About</Link>
                    </header>

                    <Route path="/home/" component={Home} />
                    <Route path="/projects/" component={Projects} />
                    
                </div>
            </Router>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from './Pages/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src="https://i.imgur.com/IHJ2ELP.gif"
        alt="new"
        
        />
      </div>
    );
  }
}

export default App;

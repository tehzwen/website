import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {toProjects: false};

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }


    handleButtonPress(){
        this.setState({
            toProjects:true
        });
    }


    render() {
            if (this.state.toProjects === true){
                return <Redirect to='/projects/'/>
            }
            return(
            <Router>
                <div style={{ 'position': 'relative', 'justifyContent': 'center', 'height': '100vh' }}>
                    <Jumbotron className="HomeJumboTron" >
                        <h1>Hello, my name is <b>Zachary Shaw</b></h1>
                        <p>
                            I'm a Canadian Computer Science student who loves making
                            software that solves problems
                        </p>
                        <p>
                            <Button className="ProjectsButton" onClick={this.handleButtonPress}>Learn more</Button>
                        </p>
                    </Jumbotron>
                </div>
            </Router>
        )
    }
}

export default Home;
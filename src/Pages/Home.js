import Components from '../Components/index';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Grid, Header, Button } from 'semantic-ui-react';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toProjects: false };

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        this.setState({
            toProjects: true
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.props);
    }


    render() {
        if (this.state.toProjects === true) {
            return <Redirect to='/projects/' />
        }
        return (
            <Grid centered className="App">
                <Components.MyHeader />
                <Grid.Row className="GridRow" columns={'equal'} textAlign={"center"} style={{ marginTop: "250px", marginBottom: "250px" }}>
                    <Grid.Column width={10}>
                        <Header className="HomeJumboTron" as="h1">Hello, my name is <b>Zachary Shaw</b></Header>
                        <p>
                            I'm a Canadian Computer Science student who loves making
                            software that solves problems
                        </p>
                        <Button color="teal" onClick={this.handleButtonPress}>Learn more</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Components.Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Home;
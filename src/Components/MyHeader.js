import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MyHeader extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Grid.Row className="Siteheader" centered columns={'equal'}>
                <Grid.Column width={2} className="Headerlink" as={Link} to="/">
                    <center>
                        <Header as="h3">Home</Header>
                    </center>
                </Grid.Column>
                <Grid.Column width={2} className="Headerlink" as={Link} to="/projects">
                    <center>
                        <Header as="h3">Projects</Header>
                    </center>
                </Grid.Column>
                <Grid.Column width={2} className="Headerlink" as={Link} to="/blog" >
                    <center>
                        <Header as="h3">Blog</Header>
                    </center>
                </Grid.Column>
                <Grid.Column width={2} className="Headerlink" as={Link} to="/about">
                    <center>
                        <Header as="h3">About</Header>
                    </center>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default MyHeader;
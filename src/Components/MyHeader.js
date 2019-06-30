import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MyHeader extends Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Grid.Row className="Siteheader" centered columns={'equal'}>
                <Grid.Column width={2} className="Headerlink" as={Link} to="/">
                    <Header as="h3">Home</Header>
                </Grid.Column>
                <Grid.Column width={2}  className="Headerlink" as={Link} to="/projects">
                    <Header as="h3">Projects</Header>
                </Grid.Column>
                <Grid.Column width={2}  className="Headerlink" as={Link} to="/blog" >
                    <Header as="h3">Blog</Header>
                </Grid.Column>
                <Grid.Column width={2}  className="Headerlink" as={Link} to="/about">
                    <Header as="h3">About</Header>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default MyHeader;
import React, { Component } from 'react'
import Components from '../Components/index';
import { Grid } from 'semantic-ui-react';

class ProjectPage extends Component {

    renderVideos() {
        return this.props.videos.map((video) => {
            return video;
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Grid className="App">
                <Components.MyHeader />
                <Grid.Row className="AppRow">
                    <Grid.Column>
                        <h3 className="ProjectPageTitle">{this.props.title}</h3>
                    </Grid.Column>
                </Grid.Row>
                {this.props.description}
                <Grid.Row className="AppRow">
                    <Grid.Column>
                        <center>{this.props.videos}</center>
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
export default ProjectPage;
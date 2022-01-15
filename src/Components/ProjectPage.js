import React, { Component } from 'react'
import { MyHeader, Footer} from '../Components/index';
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
                <MyHeader />
                {this.props.title ? <Grid.Row className="AppRow">
                    <Grid.Column>
                        <h3 className="ProjectPageTitle">{this.props.title}</h3>
                    </Grid.Column>
                </Grid.Row> : null}
                {this.props.description}
                <Grid.Row className="AppRow">
                    <Grid.Column>
                        <center>{this.props.videos}</center>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default ProjectPage;

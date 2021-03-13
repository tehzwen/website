import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react';

class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageString: "",
            titleLink: "",
            toProjectPage: false
        };

        this.contructTotalString = this.contructTotalString.bind(this);
        this.goToLink = this.goToLink.bind(this);
    }

    contructTotalString(stringVal) {
        let tempString = this.props.title;
        tempString.split(" ");

        this.setState({
            imageString: require("../Resources/" + stringVal),
            titleLink: "/" + this.props.title.split(" ").join("").toLowerCase() + "/",
        });
    }

    goToLink() {
        this.setState({
            toProjectPage: true
        });

    }

    componentWillMount() {
        if (this.props.imageName !== undefined) {
            this.contructTotalString(this.props.imageName);
        }
        else {
            this.contructTotalString("defaultProject.jpg");
        }
    }

    render() {

        return (
            <Grid textAlign="center">
                <Grid.Row onClick={() => {this.props.history.push(this.state.titleLink)}} verticalAlign="middle" className="ProjectContainer">
                    <Grid.Column width={4}>
                        <Image
                            alt={"not found"}
                            size="tiny"
                            src={this.state.imageString}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <h2>{this.props.title}</h2>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

export default ProjectBlock;
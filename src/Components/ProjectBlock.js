import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

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
            <div className="ProjectContainer" onClick={this.goToLink}>
                <img
                    alt={"not found"}
                    className="ProjectImage"
                    src={this.state.imageString}>
                </img>
                <NavLink className="ProjectTitle" to={this.state.titleLink}>{this.props.title}</NavLink>
            </div>

        )


    }
}

export default ProjectBlock;
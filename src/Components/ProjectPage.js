import React, { Component } from 'react'

class ProjectPage extends Component {

    render() {
        return (
            <div>
                <h3 className="ProjectPageTitle">{this.props.title}</h3>
                <p className="ProjectPageText">{this.props.description}</p>
            </div>
        )
    }

}
export default ProjectPage;
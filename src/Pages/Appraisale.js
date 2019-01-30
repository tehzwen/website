import React, { Component } from 'react';
import ProjectPage from '../Components/ProjectPage';

class Appraisale extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ProjectPage
                title="Appraisale"
                description={<div><p></p></div>}
                />
            </div>
        )
    }

}

export default Appraisale;
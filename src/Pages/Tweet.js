import React, { Component } from 'react';
import ProjectPage from '../Components/ProjectPage';


class Tweet extends React.Component {
    constructor(props){
        super(props);

    }

    componentWillMount(){
        window.scrollTo(0,0);
    }


    render(){
        
        return(
            <div>
                <ProjectPage 
                title="Tweet Analyzer"/>

            </div>
        )
    }

}

export default Tweet;
import React, { Component } from 'react';
import ProjectPage from '../Components/ProjectPage';

class RPS extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div>
                <ProjectPage 
                title="OpenCV Rock Paper Scissors"
                description={<div><p>This project was part of a final
                    project for CMPT399 where we were given the option
                    to choose our project and build something that used
                    the concepts taught in class. I decided to use 
                    image recognition to play a simple game of rock 
                    paper scissors against the computer who chooses a random
                    option. When I started the project I originally started 
                    the project I thought using histogram comparison could work,
                    while it did a decent job it had a hard time distinguishing
                    differences in gestures as it relies heavily on color 
                    instead of features. After that I thought that AI would surely
                    solve my problems and dove head deep into TensorFlow and tried 
                    to use it. After a few hours of training (not nearly long enough)
                    I had a barely functioning, barely understood (by me) agent to
                    classify my gestures. 
                    <br></br>
                    <br></br>
                    At long last I decided to give thresholding techniques and template
                     matching a go and instantly saw results. The only issue would be 
                     providing the templates for the matcher to match. I originally used
                     one image for each gesture (rock, paper and scissors) and compared 
                     the input from the user against that. It worked relatively well but only
                     when the hand was in the right angle and orientation that the template 
                    image was taken at. My solution was to take multiple template images
                    for each gesture, so I ended up taking 5 images per gesture and then
                     comparing each input against all 15 template images which slowed down the 
                     comparison but increased the accuracy a ton as you can see in the video it 
                    became more robust at accurately detecting the gesture at different angles
                     and orientations. Overall, was a fun project where I got to put some of 
                    the class concepts to the test and experiment.

                    <br></br>
                    <br></br>

                    The code for this project is available for download <a href="https://github.com/tehzwen/OpencvRockPaperScissors">here</a>.
                    </p></div>}
                />
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/zv2W0okyiHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default RPS;
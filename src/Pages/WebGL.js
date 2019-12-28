import React from 'react';
import ProjectPage from '../Components/ProjectPage';
import { Grid } from 'semantic-ui-react';
import GLCanvas from '../Components/GLCanvas';

class WebGL extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <ProjectPage
                description={
                    <Grid.Row className="AppRow">
                        <Grid>
                            <Grid.Row className="AppRow">
                                <Grid.Column>
                                    <h3>WebGL Running in React Example</h3>
                                    <p>
                                        This is a quick example of a fairly simplistic WebGL2 program running in React. 
                                        The program uses position and colour buffers to give cubes and multicoloured vertices,
                                        I then create a projection, view and model matrix for the scene and feed all that data 
                                        to the GPU which then uses the shader code I've written to display the scene using a camera
                                        and can apply unique rotation and translation.
                            <br></br>
                                        <br></br>
                                        The work done here is synonymous with that of other WebGL work I've done including my <a href="https://github.com/tehzwen/WebGLEngine">WebGL engine </a> 
                                        which does similar work but without the use of React. In the engine I apply shading models of flat shading and 
                                        the <a href="https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_reflection_model">blinn-phong lighting model</a>.
                            <br></br>
                                        <br></br>
                                        I am currently working on an OpenGL engine using the Golang programming language that will utilize electron as its front end and then provide 
                                        rendering using Go and OpenGL. The project is currently in development and very much still in development. It can be found <a href="https://github.com/tehzwen/GoGL">here.</a>
                        </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="AppRow">
                                <Grid.Column>
                                    <center>
                                        <GLCanvas />
                                    </center>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>

                }
            />
        );
    }
}

export default WebGL;
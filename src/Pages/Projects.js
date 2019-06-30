import React, { Component } from 'react'
import Components from '../Components/index';
import { Grid } from 'semantic-ui-react';
import Carousel from 're-carousel';

class Projects extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    createProjectList(data) {
        return data.map((item) => {
            return (<Components.ProjectBlock key={item.title + item.imageName} title={item.title} imageName={item.imageName} />)
        })
    }

    componentDidMount() {
    }

    render() {

        const projectData = [
            {
                title: "Appraisale Mobile App",
                imageName: "appraisaleLogo.png"

            },
            {
                title: "OpenCV Rock Paper Scissors",
            },
            {
                title: "C UDP Programming",
            },
            {
                title: "Discord Bot",
                imageName: "discordLogo.jpg"
            }
        ]

        return (
            <Grid>
                <Components.MyHeader />

                <Grid.Row style={{ height: '600px' }} textAlign='center'>
                    <Grid.Column>
                        <Carousel loop widgets={[Components.IndicatorDots, Components.Buttons]}>
                            <iframe title="ubuntusp4" width="900" height="500" src="https://www.youtube.com/embed/eg5uFrtn7wE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe title="rpsopencv" width="900" height="500" src="https://www.youtube.com/embed/zv2W0okyiHI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe title="hackathon" width="900" height="500" src="https://www.youtube.com/embed/AzHy3kCW4f8?autofullscreen=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Carousel>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {this.createProjectList(projectData)}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Components.Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        )
    }
}

export default Projects
import React, { Component } from 'react'
import { AnnouncementHeader, MyHeader, Footer, ProjectBlock, IndicatorDots, Buttons, Boids } from '../Components/index';
import { Grid } from 'semantic-ui-react';
import Carousel from 're-carousel';

class Projects extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    createProjectList(data) {
        return data.map((item) => {
            return (<ProjectBlock history={this.props.history} key={item.title + item.imageName} title={item.title} imageName={item.imageName} />)
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        const projectData = [
            {
                title: "WebGL Work",
                imageName: "glCubes.png"
            },
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
            <Grid className="App">
                <Boids />
                <AnnouncementHeader
                    color={"#ff130e"}
                    announcement={<h4>My new site (Construction Yard) is live now! Check it out <a href="http://constructionyard.ca/#/refinery">here!</a></h4>} />
                <MyHeader />
                <Grid.Row style={{ height: '600px' }} textAlign='center'>
                    <Grid.Column>
                        <Carousel loop widgets={[IndicatorDots, Buttons]}>
                            <iframe title="ubuntusp4" width="900" height="500" src="https://www.youtube.com/embed/eg5uFrtn7wE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe title="rpsopencv" width="900" height="500" src="https://www.youtube.com/embed/zv2W0okyiHI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe title="hackathon" width="900" height="500" src="https://www.youtube.com/embed/AzHy3kCW4f8?autofullscreen=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <iframe title="graphicsintro" width="900" height="500" src="https://www.youtube.com/embed/GkR3NjVszUA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        )
    }
}

export default Projects

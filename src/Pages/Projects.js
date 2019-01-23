import React, { Component } from 'react'
import ProjectBlock from '../Components/ProjectBlock';
import Carousel from 'react-bootstrap/lib/Carousel';

class Projects extends Component {
    render() {
        return (

            <div>
                <Carousel interval="5000">
                    <Carousel.Item>
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/AzHy3kCW4f8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">First slide label</h3>
                            <p className="CarouselTitleText">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/zv2W0okyiHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">Second slide label</h3>
                            <p className="CarouselTitleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={require("../Resources/defaultProject.jpg")} />
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">Third slide label</h3>
                            <p className="CarouselTitleText">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <ProjectBlock title="OpenCV Rock Paper Scissors" />
                <ProjectBlock title="C UDP Programming" />
            </div>
        )
    }
}

export default Projects
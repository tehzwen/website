import React, { Component } from 'react'
import ProjectBlock from '../Components/ProjectBlock';
import Carousel from 'react-bootstrap/lib/Carousel';

class Projects extends Component {
    render() {
        return (

            <div>
                <Carousel interval={null} style={{paddingTop:"10px"}}>
                    <Carousel.Item>
                        <iframe width="900" height="500" src="https://www.youtube.com/embed/AzHy3kCW4f8?autofullscreen=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">Hackathon C UDP Networking</h3>
                            <p className="CarouselTitleText">Text based game client written during HackEd 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/zv2W0okyiHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">OpenCV rock paper scissors in Python</h3>
                            <p className="CarouselTitleText">Using template matching to play a game of rps with the computer</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/eg5uFrtn7wE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Carousel.Caption>
                            <h3 className="CarouselTitleText">Ubuntu on SP4 over USB3</h3>
                            <p className="CarouselTitleText">A simple guide to installing Ubuntu on the Surface Pro 4</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div style={{marginTop:100}}></div>

                <ProjectBlock title="Appraisale Mobile App" imageName="appraisaleLogo.png" />
                <ProjectBlock title="OpenCV Rock Paper Scissors" />
                <ProjectBlock title="C UDP Programming" />
                <ProjectBlock title="Discord Bot" imageName="discordLogo.jpg"  />
            </div>
        )
    }
}

export default Projects
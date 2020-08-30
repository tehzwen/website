import React, { Component } from 'react';
import Components from '../Components/index';
import { Grid, Image } from 'semantic-ui-react';


class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Grid centered className="App">
                <Components.AnnouncementHeader
                    color={"#e6930e"}
                    announcement={<h4>My new site (Construction Yard) is live now! Check it out <a href="http://constructionyard.ca/#/refinery">here!</a></h4>} />
                <Components.MyHeader />
                <Grid.Row className="GridRow" columns={'equal'} textAlign={"center"} style={{ marginBottom: "250px" }}>
                    <Grid.Column width={6}>
                        <center>
                            <h1 className="AboutTitle">About me</h1>
                            <Image size="small" rounded style={{ marginBottom: '25px' }} src={require('../Resources/selfie.jpg')} alt={"not found"} />
                            <p className="AboutText">
                                My name is Zachary Shaw and I'm a full time student
                                pursuing a career in Computer Science.
                                I love to program and am constantly working on new projects that help solve
                                everyday problems and make life a little easier for myself and those around me.
                                <br />
                                <br />
                                The purpose of this website is to showcase projects I've made which are all available
                                <a className="AboutText" href="https://github.com/tehzwen" target="_blank"> here</a> as well
                                as under the projects tab on this site. I love working with passionate people
                                on exciting projects. Inquiries can be sent to zachthm@gmail.com.
                                <br />
                                <br />
                                Thank you for visiting my site ☺ </p>
                        </center>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Components.Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default About;
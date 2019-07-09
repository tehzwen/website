import React from 'react';
import ProjectPage from '../Components/ProjectPage';
import { Grid, Embed } from 'semantic-ui-react';

class Appraisale extends React.Component {

    render() {
        return (
            <ProjectPage
                title="Appraisale"
                description={
                    <Grid.Row className="AppRow">
                        <Grid.Column>
                            <p>
                                This project was part of Startup Edmonton's Student Summer Program where students can apply to come in to their office for free
                                mentoring in starting their own business idea and work on it for the summer. The idea I came up was a local selling platform where
                                posters can get user opinions on how much their product is worth and what they'd be willing to pay for it. Another part of the idea
                                was to use local spots such as cafes and small businesses to have people meet up at for the purchase of said products.
                                <br></br>
                                <br></br>
                                The frontend of the app was written in React Native and the backend was written in Nodejs. As this was the first JavaScript or mobile
                                project I'd ever worked on, alot of it was learned on the fly and honestly learning React in 2 weeks was really tough. The backend relied
                                on Nodejs to handle the requests and utilized MongoDB for storing user data. I chose these technologies because I was unfamiliar with them
                                and wanted to learn them by using them. The backend was hosted on AWS using ec2 and below are some videos of the app being used in realtime
                                on an emulator. They show how logging in worked, user interaction, chatting and appraising all work in the app.
                                <br></br>
                                <br></br>
                                The code for this project is currently private just in case I decide to continue to work on it, however if you'd like examples on
                                how I did certain things in the app feel free to email me and I'd be happy to help.
                            </p>
                        </Grid.Column>
                    </Grid.Row>}
                videos={
                    [
                        <Embed
                            active={true}
                            autoplay={false}
                            key={'mzflvDXl5lE'}
                            style={{ marginBottom: '25px' }}
                            iframe={{ allowFullScreen: true, }}
                            id='mzflvDXl5lE'
                            source='youtube'
                        />,
                        <Embed
                            active={true}
                            autoplay={false}
                            key={'pDTPLMz6f7I'}
                            style={{ marginBottom: '25px' }}
                            iframe={{ allowFullScreen: true, }}
                            id='pDTPLMz6f7I'
                            source='youtube'
                        />,
                        <Embed
                            active={true}
                            autoplay={false}
                            key={'RAdV3-gh3bQ'}
                            style={{ marginBottom: '25px' }}
                            iframe={{ allowFullScreen: true, }}
                            id='RAdV3-gh3bQ'
                            source='youtube'
                        />
                    ]}
            />
        )
    }
}

export default Appraisale;
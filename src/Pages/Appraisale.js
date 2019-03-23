import React from 'react';
import ProjectPage from '../Components/ProjectPage';

class Appraisale extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div>
                <ProjectPage 
                title="Appraisale"
                description={<div><p>
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
                    </p></div>}
                />
                <iframe title="1" width="1280" height="720" src="https://www.youtube.com/embed/mzflvDXl5lE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="2" width="1280" height="720" src="https://www.youtube.com/embed/pDTPLMz6f7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="3" width="1280" height="720" src="https://www.youtube.com/embed/RAdV3-gh3bQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }

}

export default Appraisale;
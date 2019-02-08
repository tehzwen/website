import React, { Component } from 'react';
import ProjectPage from '../Components/ProjectPage';

class DiscordBot extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div>
                <ProjectPage 
                title="Discord Bot"
                description={<div><p>
                    While in my first and second year of school I heard alot of different computing acronyms being used 
                    and one of those was API. I started to write a discord bot in order to better understand how APIs 
                    work and how to incorporate them into a project. The bot started small, simply replying when 
                    users in the server said hello to it and then eventually grew to telling jokes, trivia, displaying 
                    gifs, playing songs in the voice channel and even showing youtube videos in chat.  
                    <br></br>
                    <br></br>
                    I was also interested in learning a little bit about databases so I added a function to gamble 
                    against the bot using a points system where the database would track said points and adjust them 
                    accordingly. The bot was fun to work on but a pain to debug because I had it running on my raspberry pi 
                    which required me to control the pi with ssh and push code changes using sftp anytime I needed to change 
                    things. 
                    <br></br>
                    <br></br>
                    The project has been untouched for a while (pretty sure the youtube videos/songs don't work 100% anymore need to fix it)
                    but feel free to download the code <a href="https://github.com/tehzwen/discordBot">here</a> or make suggestions on 
                    what else could be added.
                    </p></div>}
                />
                <img className="DiscordImage"  src={require('../Resources/discordBot1.png')} />
                <img className="DiscordImage"  src={require('../Resources/discordBot2.png')} />
                <img className="DiscordImage"  src={require('../Resources/discordBot3.png')} />
                <img className="DiscordImage"  src={require('../Resources/discordBot4.png')} />
                <img className="DiscordImage"  src={require('../Resources/discordBot5.png')} />

            </div>
        )
    }

}

export default DiscordBot;
import React, { Component } from 'react';
import ProjectPage from '../Components/ProjectPage';

class CUDP extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ProjectPage 
                title="C UDP Terminal Multiplayer Game"
                description={<div><p>
                    As part of HackEd 2019 in January, myself and a group of 4 other students 
                    (Their gitpages: JJJados, CooperWallace, dcharron3, andyip28)
                    worked on a project for 24 hours that involved using C to create a UDP dedicated server 
                    and create a client also in C (for Linux/Mac) and C++/Python (Windows) where players 
                    could play a simple game across the network.
                    <br></br>
                    <br></br>
                    I originally came up with this idea as a way to get back into C programming as I hadn't 
                    done any for over a year. The networking portion was what I mostly worked on and I did a bit
                    of work on the client as well. At the start of the night we dove straight into the project 
                    but soon ran into many errors with C networking such as busy sockets (we weren't closing the sockets properly), 
                    would work for one computer and not the other and lots of other issues related to the networking project that we 
                    were unfamiliar with since this was a first for us all. 
                    <br></br>
                    <br></br>
                    For those interested in the gritty details, we used udp to send packets from the server to the client and back 
                    in the following way. A player (client) would send a packet containing their current position and username, 
                    the server then replies with a char buffer that contains packets of all the other players in the game and their 
                    respective x and y coordinates. The buffer contained a short int in the front of it that represented how many 
                    packet items were to follow that size so for example if the server replied with a buffer and the first 16 bits 
                    made up the number 5 then the client knows that there are 5 player packets to follow in the char buffer (5 other players in the game). 
                    The client would then take the information where the other players are and check if their x and y coordinates 
                    were within the client's view screen and display them accordingly. The displaying of other players was tricky as 
                    the client works in a way where the player doesn't actually move on their screen but the world moves around the player 
                    giving a sense of motion but also leaving them with a wider view.
                    <br></br>
                    <br></br>

                    This was a super fun project that I intend on continuing to work on in the future. 
                    The code for this project is available for download <a href="https://github.com/tehzwen/Project-CGOD">here</a>.
                    </p></div>}
                />
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/AzHy3kCW4f8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }

}

export default CUDP;
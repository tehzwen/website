import React, { Component } from 'react'


class About extends Component {

    render() {
        return (

            <div>
                <h1 className="AboutTitle">About me</h1>
                <img className="ZachPic" src={require('../Resources/selfie.jpg')} />
                <br></br>
                <text className="AboutText">My name is Zachary Shaw and I'm a full time student
                    pursuing a career in Computer Science.</text>
                <br></br>
                <text className="AboutText">
                    I love to program and am constantly working on new projects that help solve
                    everyday problems
                </text>
                <br></br>
                <text className="AboutText">and make life a little easier for myself
                    and those around me.</text>
                <br></br>
                <br></br>
                <text className="AboutText">The purpose of this website is to showcase projects I've made which are all available </text>
                <a className="AboutText" href="https://github.com/tehzwen">here</a>
                <text className="AboutText"> as well </text>
                <br></br>
                <text className="AboutText">as under the projects page on this site. I love working on new projects with passionate people</text>
                <br></br>
                <text className="AboutText"> on exciting projects. Inquiries can be sent to zachthm@gmail.com.</text>
                <br></br>
                <br></br>
                <text className="AboutText">Thank you for visiting my site ☺</text>
            </div>

        )
    }


}

export default About;
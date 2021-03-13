import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

class Footer extends Component {

    render() {
        return (
            <Grid.Row className="Footer-div">
                <Grid.Column>
                    <p className="FooterText"><b>Zachary Shaw</b></p>
                    <p className="FooterText">Ⓒ	Copyright 2018-2021</p>
                    <p className="FooterText"><i>All rights reserved.</i></p>
                </Grid.Column>
            </Grid.Row>
        )
    }

}

export default Footer;

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class AnnouncementHeader extends Component {
    render() {
        return (
            <Grid.Row
                verticalAlign='middle'
                className="announcement-header"
                style={{ backgroundColor: this.props.color, alignItems: 'center', paddingBottom: '0px' }}
                centered
                columns={'equal'}>
                <Grid.Column width={16}>
                    <center >{this.props.announcement}</center>
                </Grid.Column>
            </Grid.Row>
        )
    }
}
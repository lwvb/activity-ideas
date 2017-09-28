import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import './Activity.css';

class Activity extends Component {
    render() {
        return (
            <Card className="activity-card">
                <CardTitle title={this.props.title} subtitle="Card subtitle" />
                <CardText> {this.props.description} </CardText>
                <CardActions>
                </CardActions>
            </Card>
        )
    }
}

export default Activity;
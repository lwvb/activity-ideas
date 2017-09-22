import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <Card className="item-card">
                <CardTitle title={this.props.title} subtitle="Card subtitle" />
                <CardText> {this.props.description} </CardText>
                <CardActions>
                </CardActions>
            </Card>
        )
    }
}

export default Item;
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Col} from 'react-flexbox-grid/lib';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <Card className="item-card">
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                </CardActions>
            </Card>
        )
    }
}

export default Item;
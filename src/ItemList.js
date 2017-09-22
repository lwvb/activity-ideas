import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import Item from './Item';
import firebase from './Firebase.js';

class ItemList extends Component {
    constructor(props) {
        super(props);
        const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.';
        this.state = {items: [
            {id: 1, title: "test", description: dummyText},
            {id: 2, title: "test1", description: dummyText},
            {id: 3, title: "test2", description: dummyText},
            {id: 4, title: "test3", description: dummyText},
            {id: 5, title: "test4", description: dummyText},
            {id: 6, title: "test5", description: dummyText}
        ]};
    }

    componentDidMount() {
        firebase.database().ref("/items").once("value", (data) => {
            this.setState({
                items: Object.values(data.val())
            })
            console.log(data.val());
        });
    }

    render() {
        return (
            <Grid fluid className="">
                <Row>
                    {this.state.items.map((item) => 
                        <Col type="row" xs={12} sm={6} md={4} lg={3} key={item.id} >
                            <Item title={item.title} description={item.description} />
                        </Col>
                    )}
                </Row>
            </Grid>
        );
    }
}

export default ItemList;
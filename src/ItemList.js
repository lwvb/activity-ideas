import React, { Component } from 'react';
import Gridlist from './Layout/Gridlist';
import Item from './Item';
import firebase from './Firebase.js';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
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
            <Gridlist>
                {this.state.items.map((item) => 
                    <Item title={item.title} description={item.description} id={item.id} key={item.id} />
                )}
            </Gridlist>
        );
    }
}

export default ItemList;
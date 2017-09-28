import React, { Component } from 'react';
import Gridlist from '../Layout/Gridlist';
import Activity from './Activity';
import firebase from './../Firebase.js';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        firebase.database().ref("/items").on("value", (data) => {
            const items = Object.keys(data.val()).map(function (key) {
                return Object.assign({},  data.val()[key], {id: key});
            });
            
            this.setState({
                items: items
            })
        });
    }

    render() {
        return (
            <Gridlist>
                {this.state.items.map((item) => 
                    <Activity title={item.title} description={item.description} id={item.id} key={item.id} />
                )}
            </Gridlist>
        );
    }
}

export default List;
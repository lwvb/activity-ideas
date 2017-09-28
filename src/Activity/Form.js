import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import firebase from './../Firebase.js';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          link: '',
          location: '',
          cost: '',
          description: ''
        };
    }

    cancel = () => {
        console.log('cancel');
        this.props.close();
    }

    save = (event) => {
        const button = event.target;
        event.preventDefault();
        button.disabled = true;
        firebase.database().ref("/items").push(this.state, (error) => {
            if(error) {
                console.error(error);
            } else {
                button.disabled = false;
                this.props.close();
            }
        })
        
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
 
    render() {
        return (
            <form name="AddForm" onSubmit={this.save}>
                <TextField
                    name="title"
                    floatingLabelText="Title*"
                    onChange={this.handleInputChange}
                /><br />
                <TextField
                    name="link"
                    floatingLabelText="Link"
                    onChange={this.handleInputChange}
                /><br />
                <TextField
                    name="location"
                    floatingLabelText="Location"
                    onChange={this.handleInputChange}
                /><br />
                <TextField
                    name="cost"
                    floatingLabelText="Cost"
                    onChange={this.handleInputChange}
                /><br />
                <TextField
                    name="description"
                    floatingLabelText="Description*"
                    onChange={this.handleInputChange}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                /><br />
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onClick={this.cancel}
                    
                />
                <FlatButton
                    label="Submit"
                    primary={true}
                    type="submit"
                />
            </form>
        );
    }
}

export default Form;
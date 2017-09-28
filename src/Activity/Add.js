import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Form from './Form'

import './Add.css'

class Add extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div className="activity-add">
        <FloatingActionButton onClick={this.handleOpen} >
            <ContentAdd />
        </FloatingActionButton>
        
        <Dialog
            title="Fill in the details for the new activity"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
          <Form close={this.handleClose} />
        </Dialog>
      </div>
    )
  }
}

export default Add;
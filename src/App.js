import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import Item from './Item';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="">
          <AppBar title="My AppBar" />
          <Grid fluid className="">
            <Row>
              <Col type="row" xs={12} sm={6} md={4} lg={3} >
                <Item />
              </Col>
              <Col type="row" xs={12} sm={6} md={4} lg={3} >
                <Item />
              </Col>
              <Col type="row" xs={12} sm={6} md={4} lg={3}>
                <Item />
              </Col>
              <Col type="row" xs={12} sm={6} md={4} lg={3}>
                <Item />
              </Col>
              <Col type="row" xs={12} sm={6} md={4} lg={3}>
                <Item />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
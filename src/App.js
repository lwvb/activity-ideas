import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ActivityList from './Activity/List';
import ActivityAdd from './Activity/Add';

import './App.css';

class App extends Component {
  

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="">
          <ActivityAdd />
          <ActivityList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
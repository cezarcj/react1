import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './Navigation.js';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Navigation />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;

import React, { Component, Framg, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component= {Home} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

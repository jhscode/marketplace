import React, { Component, Framg, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Home from './components/Home';
import SingleAd from './components/SingleAd';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component= {Home} />
          <Route path="show-ad" component = {SingleAd} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

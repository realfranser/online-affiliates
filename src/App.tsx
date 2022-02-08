import './App.css';
import Home from './pages';
import becomeAffiliate from './pages/becomeAffiliate';

/* Testing new methods */
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/becomeAffiliate" component={becomeAffiliate} />
      </Routes>
    );
  }
}

export default App;

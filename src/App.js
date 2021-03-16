import "./App.css";
import Home from "./pages";
import becomeAffiliate from "./pages/becomeAffiliate";

/* Testing new methods */
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route path="/becomeAffiliate" component={becomeAffiliate} />

      </HashRouter>
    )
  }
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import BecomeAffiliatePage from "./pages/becomeAffiliate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/becomeAffiliate" component={BecomeAffiliatePage} exact />
      </Switch>
    </Router>
  );
}

export default App;

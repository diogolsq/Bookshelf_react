import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import LoginSignInForm from "../components/LoginSignInForm";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/login' exact component={LoginSignInForm} />
    
    </Switch>
  </Router>
);
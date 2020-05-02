import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from "./components/User";
import Visit from "./components/Visit";
import NotFoud from "./components/NotFoud";

const router = (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/visit">Visit</Link></li>
      <li><Link to="/user">User</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/user" component={User}></Route>
      <Route path="/visit" component={Visit}></Route>
      <Route component={NotFoud}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));

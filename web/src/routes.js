import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NoMatch from './pages/404';
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>

        <Route exact path="/" component={Home} />

        <Route path="*" component={NoMatch}/>

      </Switch>
    </Router>
  );
}
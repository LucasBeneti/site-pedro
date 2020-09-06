import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Publications from "../pages/publications";
import Research from "../pages/research";
import Contact from "../pages/contact";
import Home from "../pages/home";

export default function Header() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/publications">Publicações</Link>
        </li>

        <li>
          <Link to="/research">Pesquisa</Link>
        </li>

        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/publications">
          <Publications />
        </Route>

        <Route exact path="/research">
          <Research />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

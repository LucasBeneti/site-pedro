import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Publications from "../../pages/publications";
import Research from "../../pages/research";
import Contact from "../../pages/contact";
import Home from "../../pages/home";

import "./header.css";

export default function Header() {
  const history = createBrowserHistory();
  return (
    <h1>Aqui é o header</h1>
    // <Router history={history}>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>

    //     <li>
    //       <Link to="/publications">Publications</Link>
    //     </li>

    //     <li>
    //       <Link to="/research">Reseacrh</Link>
    //     </li>

    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>

    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>

    //     <Route exact path="/publications">
    //       <Publications />
    //     </Route>

    //     <Route exact path="/research">
    //       <Research />
    //     </Route>

    //     <Route exact path="/contact">
    //       <Contact />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

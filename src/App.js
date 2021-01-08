import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

export default function App() {
  return (
    < Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Jobs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router >
  );
}
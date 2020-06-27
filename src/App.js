import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Products } from "./pages/Products";
import { Join } from "./pages/Join";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/join" component={Join} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

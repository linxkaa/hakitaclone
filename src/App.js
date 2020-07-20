import React, { Component } from "react";

import "./App.scss";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" component={Blog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;

import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Register from "../routes/register";
import Profile from "../routes/profile";

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Register path="/register" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}

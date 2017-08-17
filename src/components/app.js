import { h, Component } from "preact";
import { Router } from "preact-router";
import { connect } from "preact-redux";
import { loggedIn } from "../api/user";
import Header from "./header";
import Home from "../routes/home";
import Register from "../routes/register";
import Dashboard from "../routes/dashboard";

class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
    loggedIn().then(rsp => {
      if (rsp.user) {
        this.props.dispatch({ type: "LOGGED_USER" });
      }
    });
  };

  componentWillMount = () =>
    loggedIn().then(rsp => {
      if (rsp.user) {
        this.props.dispatch({ type: "LOGGED_USER" });
      }
    });

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Register path="/register" />
          <Dashboard path="/dashboard" />
        </Router>
      </div>
    );
  }
}

export default connect()(App);

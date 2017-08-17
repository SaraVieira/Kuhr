import { h, Component } from "preact";
import { connect } from "preact-redux";
import { route } from "preact-router";
import { loggedIn } from "../../api/user";
import style from "./style";

class Dashboard extends Component {
  componentWillMount = () =>
    loggedIn().then(rsp => {
      if (rsp.user) {
        return this.props.dispatch({ type: "LOGGED_USER" });
      }
      route("/");
    });

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    return (
      <div class={style.profile}>
        <p>This is the user profile for a user named.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Dashboard);

import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { connect } from "preact-redux";
import style from "./style";

class Header extends Component {
  render({ loggedIn }) {
    return (
      <header class={style.header}>
        <h1>Kuhr</h1>
        <nav>
          <Link activeClassName={style.active} href="/">
            Home
          </Link>
          {loggedIn &&
            <Link activeClassName={style.active} href="/dashboard">
              Dashboard
            </Link>}
          {!loggedIn &&
            <Link activeClassName={style.active} href="/register">
              Register
            </Link>}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);

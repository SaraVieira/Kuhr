import { h, Component } from "preact";
import { connect } from "preact-redux";

class Home extends Component {
  render() {
    return <div className="w-100 flex justify-center pa6">Homepgae</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state
  };
};

const HomeData = connect(mapStateToProps)(Home);

export default HomeData;

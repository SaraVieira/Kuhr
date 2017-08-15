import { h, Component } from "preact";
import { connect } from "preact-redux";
import { compose } from "redux";
import { gql, graphql } from "react-apollo";

class Home extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading</div>
        </div>
      );
    }
    console.log(this.props.data.allPosts);

    return (
      <div className="w-100 flex justify-center pa6">
        <ul className="w-100 flex flex-wrap" style={{ maxWidth: 1150 }}>
          {this.props.data.allPosts.map(post =>
            <li onClick={() => this.props.data.refetch()}>
              {post.description}
              {post.imageUrl}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state
  };
};

const FeedQuery = gql`
  query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

const HomeData = graphql(FeedQuery, {
  options: {
    fetchPolicy: "network-only"
  }
})(Home);

export default HomeData;

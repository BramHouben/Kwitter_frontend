import Proptypes from "prop-types";
import { Component } from "react";

class Tweet extends Component {
  render() {
    console.log(this.props);
    let { tweet } = this.props;

    return (
      <div className='tweet'>
        <h5>{tweet.content}</h5>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: Proptypes.object.isRequired,
};

export default Tweet;

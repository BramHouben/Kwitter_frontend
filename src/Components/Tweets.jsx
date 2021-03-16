import Tweet from "./Tweet";
import { Component } from "react";

class Tweets extends Component {
  render() {
    let { tweets } = this.props;
    return (
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    );
  }
}

export default Tweets;

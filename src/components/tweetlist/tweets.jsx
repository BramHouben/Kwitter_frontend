import Tweet from "../tweet/tweet";
import { Component } from "react";
import "../tweetlist/tweets.css";

class Tweets extends Component {
  render() {
    let { tweets } = this.props;
    return (
      <div id='tweetlist'>
        <h1>Timeline</h1>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    );
  }
}

export default Tweets;

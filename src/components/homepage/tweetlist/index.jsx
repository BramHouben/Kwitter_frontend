import Tweet from "components/homepage/tweet";
import "./index.css";
import React, { Component } from "react";

export default class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
    };
    console.log("tweetlist: " + this.state.tweets);
  }
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

import Tweet from "components/profilepage/tweetuser";
import "./index.css";
import React, { Component } from "react";

export default class TweetListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
      action: this.props.action,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tweets.length !== prevProps.tweets.length) {
      console.log("update TweetListUser");
    }
  }
  render() {
    let { tweets } = this.props;
    console.log(tweets);
    return (
      <div id='tweetlist'>
        <h1>My tweets</h1>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} action={this.state.action} />
        ))}
      </div>
    );
  }
}

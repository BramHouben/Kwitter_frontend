import Tweet from "../tweet/tweet";
import "./tweets.css";
import React, { Component } from "react";
export default class tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
    };
    console.log(this.state.tweets);
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

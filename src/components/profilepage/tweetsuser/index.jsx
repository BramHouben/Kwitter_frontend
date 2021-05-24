import React, { Component } from "react";
import { connect } from "react-redux";
import TweetList from "components/profilepage/tweetListuser";

export class TweetsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props,
      action: this.props.action,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tweets.length !== prevProps.tweets.length) {
      console.log("update tweetsuser");
    }
  }

  componentDidMount() {
    console.log("new comp tweets" + this.state.tweets);
  }

  render() {
    let { tweets } = this.props;
    console.log(tweets.length);
    return (
      <div>
        <TweetList tweets={tweets} action={this.state.action} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsUser);

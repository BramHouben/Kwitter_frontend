import React, { Component } from "react";
import { connect } from "react-redux";
import TweetList from "components/tweetlist";

export class TweetsUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props,
    };
  }

  componentDidMount() {
    // console.log("new comp tweets" + this.state.tweets);
  }

  render() {
    let { tweets } = this.state.tweets;
    // console.log("new compenent tweets: " + tweets);
    return (
      <div>
        <TweetList tweets={tweets} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsUser);

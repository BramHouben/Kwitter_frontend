import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import "./index.css";
export class FollowerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followerdetails: this.props,
      countTotalTweets: this.props,
    };
  }

  componentDidMount() {
    console.log("new comp followers" + this.state.followerdetails);
  }

  render() {
    console.log(this.state.countTotalTweets);
    let { followerdetails } = this.state.followerdetails;
    let { countTotalTweets } = this.state.countTotalTweets;
    return (
      <div className='followerdetails'>
        {followerdetails !== null ? (
          <Paper elevation={3}>
            <h5>
              {/* todo make list for these 2 items in new components*/}
              Following {followerdetails.following} Followers{" "}
              {followerdetails.followers}
            </h5>
            Count tweets: {countTotalTweets}
          </Paper>
        ) : (
          <div>No followers loaded</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FollowerDetails);

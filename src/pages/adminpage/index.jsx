import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import "./index.css";
import AllLogs from "components/adminpage/allLogs";
//import this component because it's the same
import Tweetsusers from "components/profilepage/tweetsuser";
import { Redirect } from "react-router";

export class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      logs: [],
      tweets: [],
      loggedIn: props.loggedIn,
    };
    this.removeTweet = this.removeTweet.bind(this);
    this.loadTenTweets = this.loadTenTweets.bind(this);
    this.getLogs = this.getLogs.bind(this);
    this.getUsersData = this.getUsersData.bind(this);
  }
  async removeTweet(e) {
    const tweets = this.state.tweets.filter((tweet) => tweet.id !== e.id);
    this.setState({ tweets: tweets });
    alert("removed tweet");
  }

  async loadTenTweets() {
    await Instance.get(ApiAction.getlatestTweets)
      .then((data) => {
        this.setState({ tweets: data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async getUsersData() {}

  async getLogs() {
    await Instance.get(ApiAction.getLogs)
      .then((data) => {
        this.setState({ logs: data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async checkForAdmin() {
    await Instance.get(ApiAction.checkModeration)
      .then((data) => {
        if (data.status === 200) {
          this.setState({ isAdmin: true });
          this.getLogs();
          this.loadTenTweets();
          this.getUsersData();
        } else {
          return <Redirect to='login' />;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.loggedIn !== prevState.loggedIn ||
      this.state.tweets !== prevState.tweets ||
      this.state.logs !== prevState.logs
    ) {
      console.log("update");
    }
  }

  componentDidMount() {
    this.checkForAdmin();
  }

  render() {
    const { logs, tweets, isAdmin } = this.state;
    return (
      <div>
        {isAdmin ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Tweetsusers
                tweets={tweets}
                action={this.removeTweet}
              ></Tweetsusers>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AllLogs logs={logs}></AllLogs>
            </Grid>
          </Grid>
        ) : (
          <p>No data</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);

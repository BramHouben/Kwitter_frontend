import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import { Redirect } from "react-router-dom";
import FollowerDetails from "components/profilepage/followerdetails";
import TweetsUser from "components/profilepage/tweetsuser";
import ProfileAccount from "components/profilepage/profileaccount";
import ProfileDetails from "components/profilepage/profiledetails";
import "./index.css";
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataloaded: false,
      loggedIn: props.loggedIn,
      redirect: false,
      tweets: [],
      profile: {},
      page: 0,
      profiledetails: {},
      countTotalTweets: 0,
      followerdetails: {},
    };
    this.removeTweet = this.removeTweet.bind(this);
  }

  async loadFollowerData() {
    await Instance.get(ApiAction.getFollowerData, {
      params: {
        page: this.state.page,
      },
    })
      .then((data) => {
        this.setState({
          followerdetails: data.data,
          dataloaded: true,
          redirect: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async removeTweet(e) {
    const tweets = this.state.tweets.filter((tweet) => tweet.id !== e.id);
    this.setState({ tweets: tweets });
    alert("removed tweet");
  }
  async loadTweetData() {
    await Instance.get(ApiAction.getTweetsUser, {
      params: {
        page: this.state.page,
      },
    })
      .then((data) => {
        this.setState({
          tweets: data.data.tweets,
          countTotalTweets: data.data.countTotalTweets,
          // dataloaded: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async loadAccountData() {
    await Instance.get(ApiAction.getProfileAccountDetails)
      .then((data) => {
        this.setState({
          profile: data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async loadProfileData() {
    await Instance.get(ApiAction.getProfileDetails)
      .then((data) => {
        this.setState({
          profiledetails: data.data,
        });
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          alert("go to login");
          this.props.loggedOut();
        }

        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.redirect !== prevState.redirect ||
      this.state.loggedIn !== prevState.loggedIn ||
      this.state.tweets.length !== prevState.tweets.length ||
      this.state.profile !== prevState.profile ||
      this.state.followerdetails !== prevState.followerdetails ||
      this.state.profiledetails !== prevState.profiledetails
    ) {
      console.log(this.state.tweets.length);
    }
  }

  componentDidMount() {
    if (!this.state.loggedIn) {
      this.setState({ redirect: true });
    } else {
      this.loadTweetData();
      this.loadAccountData();
      this.loadProfileData();
      this.loadFollowerData();
    }
  }

  render() {
    let {
      redirect,
      dataloaded,
      tweets,
      profile,
      followerdetails,
      profiledetails,
      countTotalTweets,
    } = this.state;

    if (redirect) {
      return <Redirect to='/login' />;
    } else {
      return (
        <div>
          {dataloaded &&
          tweets.length >= 0 &&
          profile !== null &&
          followerdetails !== null ? (
            // <Grid container spacing={2}
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <div className='profileaccount'>
                    <ProfileAccount profile={profile} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className='profiledetails'>
                    <ProfileDetails profiledetails={profiledetails} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <TweetsUser tweets={tweets} action={this.removeTweet} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <FollowerDetails
                      followerdetails={followerdetails}
                      countTotalTweets={countTotalTweets}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>No tweets loaded</div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = (dispatch) => ({
  loggedOut: () => dispatch({ type: "LOGIN", payload: false }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

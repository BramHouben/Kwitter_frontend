import React, { Component } from "react";
import { connect } from "react-redux";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import { Redirect } from "react-router-dom";
import TweetsUser from "components/profilepage/tweetsuser";
import ProfileDetails from "components/profiledetails";
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
    };
  }

  async loadTweetData() {
    await Instance.get(ApiAction.getTweetsUser, {
      params: {
        page: this.state.page,
      },
    })
      .then((data) => {
        console.log(data);
        this.setState({
          tweets: data.data,
          dataloaded: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async loadProfleData() {
    await Instance.get(ApiAction.getProfileDetails)
      .then((data) => {
        console.log(data);
        this.setState({
          profile: data.data,
          dataloaded: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tweets.length !== prevState.tweets.length) {
      // this.loadTweetData();
      console.log("update");
    }
  }

  componentDidMount() {
    console.log(this.state.loggedIn);
    if (!this.state.loggedIn) {
      console.log("componentmountfalse");

      this.setState({ redirect: false });
    } else {
      console.log("componentmount");
      this.loadTweetData();
      this.loadProfleData();
    }
  }

  render() {
    let { redirect, dataloaded, tweets, profile } = this.state;

    if (redirect) {
      return <Redirect to='/login' />;
    } else {
      return (
        <div>
          profile
          {dataloaded && tweets.length > 0 ? (
            <div>
              <ProfileDetails profile={profile} />

              <TweetsUser tweets={tweets} />
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

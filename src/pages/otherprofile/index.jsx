import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import ProfileDetails from "components/profilepage/profiledetails";

import Instance from "services/Api/axioscreate";
export class OtherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      followsUser: false,
      profileData: null,
    };
  }

  async followUser() {
    console.log("following");
  }

  async getProfileData() {
    await Instance.get(ApiAction.getProfileDetailsForVisitor, {
      params: {
        username: this.props.match.params.username,
      },
    })
      .then((data) => {
        console.log(data);
        this.setState({
          profileData: data.data,
          // dataloaded: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProfileData();
  }

  componentDidUpdate(prevState) {
    if (this.state.followsUser !== prevState.followsUser) {
      // this.loadTweetData();
      console.log("update");
    }
  }

  render() {
    let { followsUser, profileData } = this.state;
    console.log(this.props.match.params.username);
    console.log(profileData);
    console.log(followsUser);
    return (
      <div>
        {profileData !== null ? (
          <div>
            goed
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h1>username random user: {profileData.username}</h1>
                <h2>bio random user: {profileData.bio}</h2>

                <Button
                  id='btnfollowUser'
                  variant='contained'
                  color='primary'
                  size='large'
                  onClick={this.followUser}
                >
                  Follow
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='profiledetails'>
                  <ProfileDetails profiledetails={profileData} />
                </div>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>fout</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);

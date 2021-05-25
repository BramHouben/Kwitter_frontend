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
    this.followUser = this.followUser.bind(this);
    this.CheckFollowsUser = this.CheckFollowsUser.bind(this);
  }

  CheckFollowsUser(object) {
    if (!object.follows) {
      return (
        <Button
          id='btnfollowUser'
          variant='outlined'
          color='primary'
          size='large'
          onClick={this.followUser}
        >
          Follow
        </Button>
      );
    }
    return (
      <Button
        id='btnfollowsUser'
        variant='contained'
        color='primary'
        size='large'
      >
        Following
      </Button>
    );
  }

  async followUser() {
    await Instance.post(ApiAction.followUser, null, {
      params: {
        usernamefollowing: this.state.profileData.username,
      },
    }).then((data) => {
      if (data.status === 200) {
        this.setState({
          followsUser: true,
        });
      }
    });
  }

  async checkifUserFollows() {
    await Instance.get(ApiAction.checkFollowUser, {
      params: {
        usernameFollowing: this.props.match.params.username,
      },
    })
      .then((data) => {
        if (data.data === false) {
          this.setState({
            followsUser: false,
          });
        } else {
          this.setState({
            followsUser: true,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async getProfileData() {
    await Instance.get(ApiAction.getProfileDetailsForVisitor, {
      params: {
        username: this.props.match.params.username,
      },
    })
      .then((data) => {
        this.setState({
          profileData: data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProfileData();
    this.checkifUserFollows();
  }

  componentDidUpdate(prevState) {
    if (
      this.state.followsUser !== prevState.followsUser ||
      this.state.profileData !== prevState.profileData
    ) {
      console.log("update");
    }
  }

  render() {
    let { followsUser, profileData } = this.state;
    const CheckFollowsUser = this.CheckFollowsUser;
    console.log(followsUser);
    return (
      <div>
        {profileData !== null ? (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h1>username random user: {profileData.username}</h1>
                <h2>bio random user: {profileData.bio}</h2>
                <CheckFollowsUser follows={followsUser} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='profiledetails'>
                  <ProfileDetails profiledetails={profileData} />
                </div>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>error loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);

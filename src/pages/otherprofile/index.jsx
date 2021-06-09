import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import ProfileDetails from "components/profilepage/profiledetails";
import Instance from "services/Api/axioscreate";
import TweetList from "components/homepage/tweetlist";
import Alert from "@material-ui/lab/Alert";
export class OtherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      followsUser: false,
      profileData: null,
      tweetsUser: [],
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);

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
    })
      .then((data) => {
        if (data.status === 200) {
          this.setState({
            followsUser: true,
          });
        }
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          this.setState({ open: true });
        }
        console.log(error);
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
  async getTweetsUser() {
    await Instance.get(ApiAction.getTweetsUserVisit, {
      params: {
        page: 0,
        usernamevisit: this.props.match.params.username,
      },
    })
      .then((data) => {
        this.setState({
          tweetsUser: data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClose(event, reason) {
    this.setState({ open: false });

    if (reason === "clickaway") {
      return;
    }
  }
  componentDidMount() {
    this.getProfileData();
    this.checkifUserFollows();
    this.getTweetsUser();
  }

  componentDidUpdate(prevState) {
    if (
      this.state.followsUser !== prevState.followsUser ||
      this.state.profileData !== prevState.profileData ||
      this.state.tweetsUser !== prevState.tweetsUser ||
      this.state.open !== prevState.state.open
    ) {
      console.log("update");
    }
  }

  render() {
    let { followsUser, profileData, tweetsUser } = this.state;
    const CheckFollowsUser = this.CheckFollowsUser;
    console.log(tweetsUser);
    return (
      <div>
        {profileData !== null && tweetsUser !== null ? (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <h1>{profileData.username}</h1>
                <h2>{profileData.bio}</h2>
                <CheckFollowsUser follows={followsUser} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='profiledetails'>
                  <ProfileDetails profiledetails={profileData} />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TweetList tweets={tweetsUser} />
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>error loading</div>
        )}
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity='error'>
            Cant follow user!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);

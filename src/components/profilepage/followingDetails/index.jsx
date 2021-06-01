import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./index.css";
import { List, ListItem, ListItemText, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export default class FollowingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followingdetails: this.props.followingdetails,
      page: 1,
      pageChanged: this.props.pageChanged,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async handleChange(event, value) {
    this.setState({
      page: value - 1,
    });
    this.state.pageChanged(value);
  }
  componentDidMount() {
    console.log("new comp following" + this.state.followingdetails);
  }

  componentDidUpdate(prevprops) {
    if (prevprops.followingdetails !== this.props.followingdetails) {
      console.log("update component following");
    }
  }

  async redirectProfile(e) {
    window.location.pathname = "/" + e;
  }

  render() {
    //todo fix the props and state
    // const { followingdetails, page } = this.state;
    // console.log(followingdetails);
    return (
      <div>
        <div className='followingdetails'>
          {this.props.followingdetails !== null ? (
            <Paper elevation={3}>
              <h5>Following</h5>
              <List dense compoent='span'>
                {this.props.followingdetails.following.map((follow) => (
                  <ListItem
                    key={follow}
                    button
                    onClick={(e) => {
                      this.redirectProfile(follow);
                    }}
                  >
                    <ListItemText id={follow} primary={follow} />
                  </ListItem>
                ))}
              </List>
              <Box component='span'>
                <Pagination
                  count={Math.ceil(
                    this.props.followingdetails.countFollowing / 10
                  )}
                  page={this.props.page}
                  defaultPage={1}
                  color='primary'
                  size='small'
                  showFirstButton
                  onChange={this.handleChange}
                />
              </Box>
            </Paper>
          ) : (
            <div>No following loaded</div>
          )}
        </div>
      </div>
    );
  }
}

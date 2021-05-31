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
  handleChange(event, value) {
    console.log(value);
    this.setState({
      page: value - 1,
    });
    this.state.pageChanged(value);
  }
  componentDidMount() {
    console.log("new comp following" + this.state.followingdetails);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.followingdetails !== prevState.followingdetails) {
      console.log("update");
    }
  }
  render() {
    let { followingdetails } = this.state;
    console.log(this.state.followingdetails);
    return (
      <div>
        <div className='followingdetails'>
          {Object.keys(this.state.followingdetails).length !== 0 ? (
            <Paper elevation={3}>
              <h5>Following</h5>
              <List dense compoent='span'>
                {followingdetails.following.map((follow) => (
                  <ListItem
                    key={follow}
                    button
                    onClick={() => console.log(follow)}
                  >
                    <ListItemText id={follow} primary={follow} />
                  </ListItem>
                ))}
              </List>
              <Box component='span'>
                <Pagination
                  count={Math.ceil(followingdetails.countFollowing / 10)}
                  page={this.state.page}
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

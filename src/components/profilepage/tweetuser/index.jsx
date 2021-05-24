import React, { Component } from "react";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import IconButton from "@material-ui/core/IconButton";
export default class TweetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.tweet,
      action: this.props.action,
    };
    this.deleteTweet = this.deleteTweet.bind(this);
  }

  async deleteTweet() {
    await Instance.delete(ApiAction.deleteTweet, {
      params: {
        id: this.state.tweet.id,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.state.action(this.state.tweet);
  }

  render() {
    let timeTweet = moment.utc(this.state.tweet.tweetTime).fromNow();

    return (
      <div className='tweet' id='tweet'>
        <Card variant='outlined'>
          <CardContent>
            <div id='momenttime'>
              Posted
              {"   " + timeTweet}
            </div>
            <IconButton aria-label='delete' onClick={this.deleteTweet}>
              <DeleteIcon fontSize='small' />
            </IconButton>
            <p>{this.state.tweet.content}</p>
            <FavoriteBorderOutlinedIcon id='hearthicon' />
          </CardContent>
        </Card>
      </div>
    );
  }
}
TweetUser.propTypes = {
  tweet: PropTypes.object.isRequired,
};
